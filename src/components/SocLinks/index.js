import React from 'react'
import { socLinks as links } from './../../links'

const renderItems = () => {
  return links.map(item => {
    if (!item.isActive) return null

    return (
      <li
          key={ item.name }
          className='soc-links__item'>
        <a
            href={ item.url }
            title={ item.name }
            className='soc-links__link'
            target='_blank'
            rel='noopener noreferrer'>
          <span className={ `soc-links__icon icon-${item.name}` }/>
        </a>
      </li>
    )
  })
}

export default function SocLinks() {
  return (
      <ul className='soc-links'>{ renderItems() }</ul>
  )
}
