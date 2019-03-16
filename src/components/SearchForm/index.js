import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { search } from './../../ac'
import { classes } from './../../constants'

class SearchForm extends Component {
    static propTypes = {
        searchingStr: PropTypes.string
    }

    constructor(props) {
        super(props)

        this.state = {
            isFocus: false
        }
    }

    handleChange = e => this.props.search(e.target.value)

    handleSubmit = e => e.preventDefault()

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

    // TODO  відобразити лінк на популярні відео
    // loadPopular = () => {
    //     this.switchMode(modes.POPULAR)
    // }

    // TODO  відобразити повідомлення
    // renderSearchMsg = () => {
    //     if (!this.state.results && this.state.isLoaded) {
    //         return <div>
    //             <div className='u-small'>No results :(</div>
    //             <div
    //                 onClick={ this.loadPopular }
    //                 className='u-link'>
    //                 Popular movies
    //             </div>
    //         </div>
    //     }
    // }

    render() {
        const { searchingStr } = this.props

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
                            value={ searchingStr }
                            type='text'
                            onChange={ this.handleChange }
                            onFocus={ this.addFocus }
                            onBlur={ this.removeFocus }/>
                    </div>
                    <button className='search__btn icon-search'/>
                </form>
                {/*{ this.renderSearchMsg() }*/}
            </div>
        )
    }
}

export default connect(state => ({
    searchingStr: state.movies.searchingStr
}), { search })(SearchForm)
