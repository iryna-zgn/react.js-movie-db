import { Map } from 'immutable'

export function objToMap(obj, DataRecord = Map) {
    return Object.keys(obj).reduce((acc, key) => acc.set(key, obj[key]), new DataRecord())
}

// export function arrToMap(arr) {
//     return arr.reduce((acc, item) => acc.set(item.id, item), new Map())
// }
//
// export function mapToArr(obj) {
//     return obj.valueSeq().toArray()
// }
