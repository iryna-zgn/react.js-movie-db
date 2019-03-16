export default store => next => action => {
    const { callAPI } = action
    if (!callAPI) return next(action)

    fetch(callAPI)
        .then(response => response.json())
        .then(response => next({...action, response}))
}
