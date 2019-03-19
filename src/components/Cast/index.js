import React from 'react'
import { getImg } from './../../helpers'

const renderCast = cast => {
    if (!cast) return null

    return cast.slice(0, 6).map(el => {
        return <div
            key={ el.cast_id }
            className='cast__item'>
            <img src={ getImg(el.profile_path) } alt=''/>
            <div className='t3'>{ el.name }</div>
            <div className='cast__desc'>{ el.character }</div>
        </div>
    })
}

export default function Cast(props) {
    return (
        <div className='cast'>
            <h2 className='t2'>Cast</h2>
            <div className='cast__list'>
                { renderCast(props.cast) }
            </div>
        </div>
    )
}
