import React from 'react'
import Logo from './../Logo'
import SocLinks from './../../components/SocLinks'
import { RHO } from './../../paths'

export default function Header() {
    return (
        <header className='header'>
            <Logo
                text='movies'
                link={ RHO.MOVIES} />
            <div className='header__inline'>
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
