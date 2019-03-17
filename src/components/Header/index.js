import React from 'react'
import SearchForm from './../SearchForm'
import Logo from './../Logo'
import SocLinks from './../../components/SocLinks'
import { RHO_BLOG } from './../../paths'

export default function header() {
    return (
        <header className='header'>
            <div className='header__main'>
                <Logo
                    text='movies'
                    link='/' />
                <SearchForm/>
            </div>
            <div className='header__links'>
                <SocLinks/>
                <Logo
                    link={ RHO_BLOG }
                    text='blog'
                    isSmall
                    isTargetBlank
                    title='rho blog'/>
            </div>
        </header>
    )
}
