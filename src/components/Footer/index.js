import React from 'react'

export default function footer() {
    return (
        <footer className='footer'>
            <div className='footer__copyright'>
                © { (new Date()).getFullYear() } Rho
            </div>
        </footer>
    )
}
