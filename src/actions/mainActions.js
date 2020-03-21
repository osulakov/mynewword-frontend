export const changeDeleteMode = (deleteMode) => (dispatch) => {
    console.log('changeDeleteMode actions', deleteMode)
    dispatch({type: 'CHANGE_DELETE_MODE', payload: !deleteMode})
}