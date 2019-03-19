const BASE = 'https://api.themoviedb.org'
export const KEY = 'ac710db081029f2383b7c329b25a753a'
export const URL_POPULAR = `${BASE}/3/movie/popular?api_key=${KEY}`
export const URL_SEARCH = `${BASE}/3/search/movie?api_key=${KEY}`
export const URL_IMG = `https://image.tmdb.org/t/p/w500`
export const URL_GENRES = `${BASE}/3/genre/list?api_key=${KEY}`
export const URL_MOVIE = `${BASE}/3/movie/`

export const RHO = {
    BLOG: 'https://iryna-zgn.github.io/vue.js-blog',
    MOVIES: 'https://iryna-zgn.github.io/react.js-movie-db'
}

export const socLinks = [
    {
        name: 'github',
        url: 'https://github.com/iryna-zgn',
        isActive: true
    },
    {
        name: 'instagram',
        url: '#',
        isActive: false
    },
    {
        name: 'facebook',
        url: 'https://www.facebook.com/ira.dmytruk',
        isActive: true
    }
]