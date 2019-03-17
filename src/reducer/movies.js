import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
// import { objToMap } from './../helpers'

const ReducerState = Record({
    results: [],
    total_pages: 1,
    page: 1,
    total_results: 0,
    loading: false,
    // isLoaded: false,
    query: ''
})

export default (state = new ReducerState(), action) => {
    const { type, payload, response, err } = action

    switch (type) {
        case actions.SEARCH:
            return state.set('query', payload.query)

        case actions.LOAD_MOVIES + actions.START:
            return state.set('loading', true)

        case actions.LOAD_MOVIES + actions.SUCCESS:
            // objToMap(response, ReducerState)
            return state
                    .set('results', response.results)
                    .set('total_pages', response.total_pages)
                    .set('page', response.page)
                    .set('total_results', response.total_results)
                    .set('loading', false)

        case actions.LOAD_MOVIES + actions.ERR:
            console.log('---', err)
            return state

        case actions.LOAD_NEXT_PAGE:
            return state
                    .set('page', payload.page)
                    .set('results', [...state.results, ...payload.results])

        default:
            return state
    }
}
