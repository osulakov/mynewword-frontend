const intialStateMain = {
    deleteMode: false
}

const mainReducer = (state=intialStateMain, action={}) => {
    switch(action.type) {
        case 'CHANGE_DELETE_MODE':
            return Object.assign({}, state, {deleteMode: action.payload});
        default:
            return state;
    }
}

export default mainReducer;