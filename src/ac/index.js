import { actions } from './../constants'
import { URL_POPULAR, URL_GENRES, URL_SEARCH } from './../paths'
import { modes } from './../constants'

function getUrl(mode, query, page) {
    return mode === modes.POPULAR
        ? `${URL_POPULAR}&page=${page}`
        : `${URL_SEARCH}&query=${query}&page=${page}`
}

export function loadMovies(mode = modes.POPULAR, query = '', page = 1) {
    return {
        type: actions.LOAD_MOVIES,
        payload: { mode, query },
        callAPI: getUrl(mode, query, page)
    }
}

export function loadNextPage(mode = modes.POPULAR, query = '', page = 1) {
    return {
        type: actions.LOAD_NEXT_PAGE,
        payload: { page },
        callAPI: getUrl(mode, query, page)
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
