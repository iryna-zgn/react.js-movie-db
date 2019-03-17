import React from 'react'
import { classes } from './../../constants'

export default function preloader(props) {
  let className = 'preloader'
  if (props.isFixed) className += ` ${classes.IS_FIXED}`

  return (
      <div className={ className }>
        <div className='preloader__inner'/>
      </div>
  )
}
