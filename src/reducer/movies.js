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
    query: '',
    lastQuery: '',
    movie: {},
    credits: {}
})

export default (state = new ReducerState(), action) => {
    const { type, payload, response } = action

    switch (type) {
        case actions.LOAD_MOVIES + actions.START:
            return state.set('loading', true)

        case actions.LOAD_MOVIES + actions.SUCCESS:
            return objToMap(response, ReducerState)
                    .set('query', payload.query)
                    .set('lastQuery', payload.query)
                    .set('mode', payload.mode)
                    .set('loading', false)

        case actions.LOAD_NEXT_PAGE + actions.START:
            return state.set('loadingMore', true)

        case actions.LOAD_NEXT_PAGE + actions.SUCCESS:
            return state
                    .set('page', payload.page)
                    .set('results', [...state.results, ...response.results])
                    .set('loadingMore', false)

        case actions.SET_QUERY:
            return state.set('query', payload.query)

        case actions.LOAD_MOVIE + actions.START:
            return state.set('loading', true)

        case actions.LOAD_MOVIE + actions.ERR:
            return state
                    .set('total_results', 0)
                    .set('loading', false)

        case actions.LOAD_MOVIE + actions.SUCCESS:
            return state
                    .set('movie', response)
                    .set('total_results', 1)
                    .set('loading', false)

        case actions.LOAD_CREDITS + actions.START:
            return state.set('loading', true)

        case actions.LOAD_CREDITS + actions.SUCCESS:
            return state
                    .set('credits', response)
                    .set('loading', false)

        default:
            return state
    }
}
