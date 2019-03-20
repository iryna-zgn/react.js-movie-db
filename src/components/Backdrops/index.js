import React from 'react'
import { getImg } from './../../helpers'

const renderBackdrops = images => {
    if (!images) return null

    return images.backdrops.map(el => {
        return (
            <img key={el.file_path} src={ getImg(el.file_path) } alt=''/>
        )
    })
}

export default function Backdrops(props) {
    if (!props.images.backdrops.length) return null

    return (
        <div className='backdrops'>
            <h2 className='t2'>Backdrops</h2>
            <div className='backdrops__gallery u-scrollbar-x'>
                { renderBackdrops(props.images) }
            </div>
        </div>
    )
}
