import { combineReducers } from 'redux'
import movies from './movies'
import genres from './genres'
import modals from './modals'

export default combineReducers({
    movies,
    genres,
    modals
})
