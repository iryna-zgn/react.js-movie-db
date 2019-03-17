import { actions } from './../constants'
import { URL_POPULAR, URL_GENRES, URL_SEARCH } from './../paths'
import { modes } from './../constants'

export function loadMovies(page = 1) {
    return {
        type: actions.LOAD_MOVIES,
        payload: { page },
        callAPI: `${URL_POPULAR}&page=${page}`
    }
}

export function search(query = '') {
    return {
        type: actions.SEARCH,
        payload: { query },
        callAPI: `${URL_SEARCH}&query=${query}`
    }
}

export function loadGenres() {
    return {
        type: actions.LOAD_GENRES,
        callAPI: URL_GENRES
    }
}

export function loadNextPage(page = 1, mode = modes.POPULAR, query = '') {
    return {
        type: actions.LOAD_NEXT_PAGE,
        payload: { page, mode, query },
        callAPI: mode === modes.POPULAR
            ? `${URL_POPULAR}&page=${page}`
            : `${URL_SEARCH}&query=${query}&page=${page}`
    }
}
