import React from 'react'
import Logo from './../Logo'
import SearchForm from './../SearchForm'
import SocLinks from './../../components/SocLinks'
import { RHO } from './../../links'

export default function Header() {
    return (
        <header className='header'>
            <div className='header__main'>
                <Logo
                    text='movies'
                    link={ RHO.MOVIES} />
                <SearchForm/>
            </div>
            <div className='header__links'>
                <SocLinks/>
                <Logo
                    link={ RHO.BLOG }
                    text='blog'
                    isSmall
                    isTargetBlank
                    title='rho blog'/>
            </div>
        </header>
    )
}
