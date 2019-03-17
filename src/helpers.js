import { Map } from 'immutable'

export function objToMap(obj, DataRecord = Map) {
    return Object.keys(obj).reduce((acc, key) => acc.set(key, obj[key]), new DataRecord())
}
