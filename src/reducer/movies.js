import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { objToMap } from './../helpers'

const ReducerState = Record({
    results: [],
    total_pages: 1,
    page: 1,
    total_results: 0,
    loading: false,
    loadingMore: false,
    // isLoaded: false,
    query: ''
})

export default (state = new ReducerState(), action) => {
    const { type, payload, response } = action

    switch (type) {
        case actions.SEARCH:
            return state.set('query', payload.query)

        case actions.LOAD_MOVIES + actions.START:
            return state.set('loading', true)

        case actions.LOAD_MOVIES + actions.SUCCESS:
            return objToMap(response, ReducerState)
                    .set('loading', false)

        case actions.LOAD_NEXT_PAGE + actions.START:
            return state.set('loadingMore', true)

        case actions.LOAD_NEXT_PAGE + actions.SUCCESS:
            return state
                    .set('page', payload.page)
                    .set('results', [...state.results, ...response.results])
                    .set('loadingMore', false)

        default:
            return state
    }
}
