import { actions } from './../constants'
import { URL_POPULAR, URL_GENRES, URL_SEARCH } from './../paths'
import { modes } from './../constants'

function getUrl(page, mode, query) {
    return mode === modes.POPULAR
        ? `${URL_POPULAR}&page=${page}`
        : `${URL_SEARCH}&query=${query}&page=${page}`
}

export function loadMovies(page = 1, mode = modes.POPULAR, query = '') {
    return {
        type: actions.LOAD_MOVIES,
        payload: { page, mode, query },
        callAPI: getUrl(page, mode, query)
    }
}

export function loadNextPage(page = 1, mode = modes.POPULAR, query = '') {
    return {
        type: actions.LOAD_NEXT_PAGE,
        payload: { page, mode, query },
        callAPI: getUrl(page, mode, query)
    }
}

export function loadGenres() {
    return {
        type: actions.LOAD_GENRES,
        callAPI: URL_GENRES
    }
}

export function setQuery(query) {
    return {
        type: actions.SET_QUERY,
        payload: { query }
    }
}
