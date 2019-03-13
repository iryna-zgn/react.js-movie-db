import React from 'react'

export default function footer() {
    return (
        <footer className="footer">
            © { (new Date()).getFullYear() }
        </footer>
    )
}
