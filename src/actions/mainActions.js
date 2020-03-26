export const changeDeleteMode = (deleteMode) => (dispatch) => {
    dispatch({type: 'CHANGE_DELETE_MODE', payload: !deleteMode})
}