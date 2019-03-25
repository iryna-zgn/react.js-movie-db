import { actions } from './../constants'
// eslint-disable-next-line
import { Map, Record } from 'immutable'

const GenreRecord = Record({
    isGalleryModal: false,
    parameter: null
})

export default (state = new GenreRecord(), action) => {
    const { type, payload } = action

    switch (type) {
        case actions.TOGGLE_MODAL:
            return state
                    .set(`is${payload.name}`, payload.action)
                    .set('parameter', payload.parameter)

        default:
            return state
    }
}
