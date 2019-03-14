import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }

    render() {
        return (
            <div className='search'>
                <form
                    className='search__form'
                    onSubmit={ this.handleSubmit }>
                    <input
                        value={ this.state.searchingStr }
                        className='search__input'
                        type='text'
                        onChange={ this.handleChange }/>
                    <button className='search__btn icon-search'/>
                </form>
            </div>
        )
    }
}
