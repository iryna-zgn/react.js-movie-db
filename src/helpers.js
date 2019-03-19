import { Map } from 'immutable'
import { URL_IMG } from './paths'

export function objToMap(obj, DataRecord = Map) {
    return Object.keys(obj).reduce((acc, key) => acc.set(key, obj[key]), new DataRecord())
}

export function getImg(img) {
    return img ? `${URL_IMG}${img}` : 'static/images/rho_light.jpg'
}

export function separateByCommas(arr) {
    if (arr) return arr.reduce((acc, el, index) => acc + (index ? ', ' : '') + el.name , '')
}

export function getYear(date){
    if (date) return date.slice(0, 4)
}

export function formatNumber(number, symbol='') {
    if (number) return symbol + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatTime(number) {
    if (number) return `${Math.floor(number / 60)} h ${number % 60} min`
}
