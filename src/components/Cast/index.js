import React from 'react'
import { getImg } from './../../helpers'

const renderCast = cast => {
    if (!cast) return null

    return cast.slice(0, 6).map(el => {
        return (
            <div
                key={ el.cast_id }
                className='cast__item'>
                <div
                    className='cast__img'
                    style={{ backgroundImage: `url(${getImg(el.profile_path)})` }}>
                    <img src='static/images/rho_light.jpg' alt='' className='u-dummy'/>
                </div>
                <div className='t4'>{ el.name }</div>
                <div className='cast__desc'>{ el.character }</div>
            </div>
        )
    })
}

export default function Cast(props) {
    if (!props.cast.length) return null

    return (
        <div className='cast'>
            <h2 className='t2'>Cast</h2>
            <div className='cast__list'>
                { renderCast(props.cast) }
            </div>
        </div>
    )
}
