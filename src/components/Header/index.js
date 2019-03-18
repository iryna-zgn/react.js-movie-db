import React from 'react'
import SearchForm from './../SearchForm'
import Logo from './../Logo'
import SocLinks from './../../components/SocLinks'
import { RHO } from './../../paths'

export default function header() {
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
