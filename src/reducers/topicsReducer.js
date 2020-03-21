const intialStateTopics = {
    currentTopic: '',
    topics: [],
    topicsForFutureWord: []
}

const topicsReducer = (state=intialStateTopics, action={}) => {
    switch(action.type) {
        case 'GET_ALL_TOPICS':
            return Object.assign({}, state, {topics: action.payload});
        case 'TOPICS_FOR_FUTURE_WORD':
            return Object.assign({}, state, {topicsForFutureWord: action.payload});
        case 'SET_CURRENT_TOPIC':
            return Object.assign({}, state, {currentTopic: action.payload});
        default:
            return state;
    }
}

export default topicsReducer;