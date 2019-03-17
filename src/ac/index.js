import { actions } from './../constants'
import { URL_POPULAR, URL_GENRES } from './../paths'

export function search(query) {
    return {
        type: actions.SEARCH,
        payload: { query }
    }
}

export function loadMovies() {
    return {
        type: actions.LOAD_MOVIES,
        callAPI: URL_POPULAR
    }
}

export function loadGenres() {
    return {
        type: actions.LOAD_GENRES,
        callAPI: URL_GENRES
    }
}

export function loadNextPage(page) {
    return {
        type: actions.LOAD_NEXT_PAGE,
        payload: { page },
        callAPI: `${URL_POPULAR}&page=${page}`
    }
}
