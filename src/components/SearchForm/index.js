import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovies, setQuery } from './../../ac'
import { classes, modes } from './../../constants'

class SearchForm extends Component {
    static propTypes = {
        query: PropTypes.string,
        lastQuery: PropTypes.string,
        setQuery: PropTypes.func,
        loadMovies: PropTypes.func
    }

    state = {
        isFocus: false
    }

    handleChange = e => this.props.setQuery(e.target.value)

    handleSubmit = e => {
        const { query, lastQuery } = this.props

        e.preventDefault()
        if (query && query !== lastQuery) this.props.loadMovies(1, modes.SEARCH, query)
    }

    addFocus = () => {
        this.setState({
            isFocus: true
        })
    }

    removeFocus = () => {
        this.setState({
            isFocus: false
        })
    }

    loadPopular = () => {
        this.props.loadMovies()
    }

    renderSearchMsg = () => {
        if (!this.props.total_results) {
            return <div>
                <div className='search__msg'>No results :(</div>
                <div
                    onClick={ this.loadPopular }
                    className='search__link'>
                    Popular movies
                </div>
            </div>
        }
    }

    render() {
        let classNameInput = 'search__field'
        if (this.state.isFocus) classNameInput += ` ${classes.IS_FOCUS}`

        return (
            <div className='search'>
                <form
                    className='search__form'
                    onSubmit={ this.handleSubmit }>
                    <div
                        className={ classNameInput }>
                        <input
                            value={ this.props.query }
                            type='text'
                            onChange={ this.handleChange }
                            onFocus={ this.addFocus }
                            onBlur={ this.removeFocus }/>
                    </div>
                    <button className='search__btn icon-search'/>
                </form>
                { this.renderSearchMsg() }
            </div>
        )
    }
}

export default connect(state => ({
    query: state.movies.query,
    lastQuery: state.movies.lastQuery,
    total_results: state.movies.total_results
}), {
    loadMovies,
    setQuery
})(SearchForm)
