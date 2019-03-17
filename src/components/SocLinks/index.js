import React from 'react'

const items = [
    {
      name: 'github',
      url: 'https://github.com/iryna-zgn',
      isActive: true
    },
    {
      name: 'instagram',
      url: 'https://www.instagram.com/dmytruk.i/',
      isActive: true
    },
    {
      name: 'facebook',
      url: '#',
      isActive: false
    }
]

const renderItems = () => {
  return items.map(item => {
    if (item.isActive) {
      return <li
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
    } else {
      return null
    }
  })
}

export default function socLinks() {
  return (
      <ul className='soc-links'>{ renderItems() }</ul>
  )
}
