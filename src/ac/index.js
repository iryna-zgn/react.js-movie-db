import { actions } from './../constants'
import { urlPopular, urlGenreList } from './../paths'

export function search(query) {
    return {
        type: actions.SEARCH,
        payload: { query }
    }
}

export function loadMovies() {
    return {
        type: actions.LOAD_MOVIES,
        callAPI: urlPopular
    }
}

export function loadGenres() {
    return {
        type: actions.LOAD_GENRES,
        callAPI: urlGenreList
    }
}

export function loadNextPage() {
    return {
        type: actions.LOAD_NEXT_PAGE
    }
}
