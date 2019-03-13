import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <form className='search'>
                <input className='search__input' type='text'/>
                <button className='search__btn'>search</button>
            </form>
        )
    }
}
