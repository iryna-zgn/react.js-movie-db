import React from 'react'
import { Map } from 'immutable'
import { URL_IMG } from './paths'

export function objToMap(obj, DataRecord = Map) {
    return Object.keys(obj).reduce((acc, key) => acc.set(key, obj[key]), new DataRecord())
}

export function getImg(img) {
    return img ? `${URL_IMG}${img}` : 'static/images/rho_light.jpg'
}

export function formatGenres(genres) {
    if (genres) return genres.map((genre, index) => {
        return <span key={ genre.id }>
                    { (index ? `, ${genre.name.toLowerCase()}` : genre.name) }
                </span>
    })
}

export function getYear(date){
    if (date) return date.slice(0, 4)
}
