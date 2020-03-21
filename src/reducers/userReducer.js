const initialStateUser = {
    token: ''
}

const userReducer = (state=initialStateUser, action={}) => {
    switch(action.type) {
        case 'USER_AUTH':
            return Object.assign({}, state, { 
                token: action.payload.token
            })
        default:
            return state;
    }
}

export default userReducer;