import React from 'react'
import Logo from './../../components/Logo'
import SocLinks from './../../components/SocLinks'

export default function footer() {
    return (
        <footer className='footer'>
            <div className='footer__inline'>
                <SocLinks/>
                <Logo
                    link='https://rho-blog.github.io/rho/'
                    text='blog'
                    isSmall
                    title='rho blog'/>
            </div>
            <div className='footer__copyright'>
                © { (new Date()).getFullYear() }
            </div>
        </footer>
    )
}
