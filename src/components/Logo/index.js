import React from 'react'
import { classes } from './../../constants'

export default function Logo(props) {
    let className= 'logo'

    if (props.isSmall) className += ` ${classes.IS_SMALL}`

    return (
        <div className={ className }>
            <a
                href={ props.link || '#'}
                title={ props.title }
                target={ props.isTargetBlank ? '_blank' :  '_self'}
                className='logo__link'
                rel='noopener noreferrer'>
                <span className='logo__main'>rho</span>
                <span className='logo__text'>{ props.text }</span>
            </a>
        </div>
    )
}
