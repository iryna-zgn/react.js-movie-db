import { actions } from './../constants'
import { URL_POPULAR, URL_GENRES, URL_SEARCH, URL_MOVIE, KEY } from './../links'
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

export function loadMovie(id) {
    return {
        type: actions.LOAD_MOVIE,
        callAPI: `${URL_MOVIE}${id}?api_key=${KEY}&append_to_response=images`
    }
}

export function loadCredits(id) {
    return {
        type: actions.LOAD_CREDITS,
        callAPI: `${URL_MOVIE}${id}/credits?api_key=${KEY}`
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

export function toggleModal(name, action, parameter) {
    return {
        type: actions.TOGGLE_MODAL,
        payload: { name, action, parameter }
    }
}
