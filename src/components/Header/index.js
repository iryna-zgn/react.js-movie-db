import React from 'react'
import SearchForm from './../SearchForm'
import Logo from './../Logo'

export default function header() {
    return (
        <header className='header'>
            <Logo
                text='movies'
                link='/'/>
            <SearchForm/>
        </header>
    )
}
