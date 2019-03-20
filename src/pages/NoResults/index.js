import React from 'react'
import { Link } from 'react-router-dom'

export default function () {
    return (
        <div className='no-results'>
            <div className='no-results__msg'>No results :(</div>
            <Link to={'/'}
                  className='no-results__link'>
                Popular movies
            </Link>
        </div>
    )
}
