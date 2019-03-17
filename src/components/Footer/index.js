import React from 'react'
import Logo from './../../components/Logo'
import SocLinks from './../../components/SocLinks'
import { RHO_BLOG } from './../../paths'

export default function footer() {
    return (
        <footer className='footer'>
            <div className='footer__inline'>
                <SocLinks/>
                <Logo
                    link={ RHO_BLOG }
                    text='blog'
                    isSmall
                    isTargetBlank
                    title='rho blog'/>
            </div>
            <div className='footer__copyright'>
                © { (new Date()).getFullYear() }
            </div>
        </footer>
    )
}
