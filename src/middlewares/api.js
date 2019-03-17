import { actions } from './../constants'

export default store => next => action => {
    const { callAPI, type, ...rest } = action
    if (!callAPI) return next(action)

    next({
        ...rest,
        type: type + actions.START
    })

    setTimeout(() => {
        fetch(callAPI)
            .then(response => response.json())
            .then(response => next({...rest, type: type + actions.SUCCESS, response}))
            .catch(err => next({...rest, type: type + actions.ERR, err}))
    }, 700)
}
