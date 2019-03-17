import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'
import { objToMap } from './../helpers'

const GenreRecord = Record({
    genres: []
})

export default (state = new GenreRecord(), action) => {
    const { type, response } = action

    switch (type) {
        case actions.LOAD_GENRES + actions.SUCCESS:
            return objToMap(response, GenreRecord)

        default:
            return state
    }
}
