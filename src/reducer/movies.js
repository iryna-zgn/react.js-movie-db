import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { objToMap } from './../helpers'

const MovieRecord = Record({
    results: [],
    total_pages: 1,
    pages: 0,
    total_results: 0
})

export default (state = new MovieRecord(), action) => {
    const { type, response } = action

    switch (type) {
        case actions.SEARCH:
            return state

        case actions.LOAD_MOVIES:
            return objToMap(response, MovieRecord)

        default:
            return state
    }
}
