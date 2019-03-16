import { modes } from './../constants'

const defaultState = {
    movies: [],
    genres: [],
    results: 0,
    pages: 1,
    page: 1,
    mode: modes.POPULAR,
    searchingStr: 'from store',
    isPreloader: false,
    isLoaded: false
}

const switchMode = (mode, str) => {
    return {
        movies: [],
        page: 1,
        pages: 1,
        mode: mode,
        searchingStr: mode === modes.POPULAR ? '' : str
    }
}

const getMode = str => str.length ? modes.SEARCH : modes.POPULAR

export default (state = defaultState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SEARCH':
            return {
                ...state,
                ...switchMode(getMode(payload.str), payload.str)
            }
        default:
            return state
    }
}
