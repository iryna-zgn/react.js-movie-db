import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { objToMap } from './../helpers'
import { modes } from './../constants'

const ReducerState = Record({
    results: [],
    total_pages: 1,
    page: 1,
    total_results: 0,
    loading: false,
    loadingMore: false,
    mode: modes.POPULAR,
    query: ''
    // isLoaded: false
})

export default (state = new ReducerState(), action) => {
    const { type, payload, response } = action

    switch (type) {
        case actions.LOAD_MOVIES + actions.START:
            return state.set('loading', true)

        case actions.LOAD_MOVIES + actions.SUCCESS:
            return objToMap(response, ReducerState)
                    .set('mode', modes.POPULAR)
                    .set('loading', false)

        case actions.LOAD_NEXT_PAGE + actions.START:
            return state.set('loadingMore', true)

        case actions.LOAD_NEXT_PAGE + actions.SUCCESS:
            return state
                    .set('page', payload.page)
                    .set('results', [...state.results, ...response.results])
                    .set('loadingMore', false)

        case actions.SEARCH + actions.START:
            return state.set('loading', true)

        case actions.SEARCH + actions.SUCCESS:
            console.log(payload)
            return objToMap(response, ReducerState)
                    .set('query', payload.query)
                    .set('mode', modes.SEARCH)
                    .set('loading', false)

        default:
            return state
    }
}
