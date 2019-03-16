import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'

const ReducerState = Record({
    results: [],
    total_pages: 1,
    page: 1,
    total_results: 0,
    isLoaded: false,
    isPreloader: false,
    query: ''
})

const defaultState = new ReducerState()

export default (state = defaultState, action) => {
    const { type, payload, response } = action

    switch (type) {
        case actions.SEARCH:
            return state.set('query', payload.query)

        case actions.LOAD_MOVIES:
            return Object.keys(response)
                .reduce((acc, key) => acc.set(key, response[key]), state)

        case actions.LOAD_NEXT_PAGE:
            return state.set('page', state.page + 1)

        default:
            return state
    }
}
