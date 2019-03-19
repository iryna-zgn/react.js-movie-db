import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__copyright'>
                © { (new Date()).getFullYear() } Rho
            </div>
        </footer>
    )
}
