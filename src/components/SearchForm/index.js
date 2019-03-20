import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadMovies, setQuery } from './../../ac'
import { classes, modes } from './../../constants'
import { withRouter } from 'react-router-dom'

class SearchForm extends Component {
    static propTypes = {
        query: PropTypes.string,
        lastQuery: PropTypes.string,
        setQuery: PropTypes.func,
        loadMovies: PropTypes.func,
        // total_results: PropTypes.number
    }

    state = {
        isFocus: false
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
                            placeholder='Search for a movie'
                            type='text'
                            onChange={ this.handleChange }
                            onFocus={ this.addFocus }
                            onBlur={ this.removeFocus }/>
                    </div>
                    <button className='search__btn icon-search'/>
                </form>
            </div>
        )
    }

    handleChange = e => this.props.setQuery(e.target.value)

    handleSubmit = e => {
        const { query, lastQuery } = this.props

        e.preventDefault()

        if (query && query !== lastQuery) {
            this.props.loadMovies(modes.SEARCH, query)
            this.props.history.push(`/search/${query}`)
        }
        //
        // this.props.total_results
        //     ? this.props.history.push(`/search/${query}`)
        //     : this.props.history.push('/no-results')
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
}

export default withRouter(connect(state => ({
    query: state.movies.query,
    lastQuery: state.movies.lastQuery
    // total_results: state.movies.total_results
}), {
    loadMovies,
    setQuery
})(SearchForm))
