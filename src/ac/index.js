import { actions } from '../constants'

export function search(str) {
    return {
        type: actions.SEARCH,
        payload: { str }
    }
}
