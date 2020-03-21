const initialStateWords = {
    words: [],
    word: {},
    tagsForFutureWord: [],
    wordsForTopic: []
}

const wordsReducer = (state=initialStateWords, action={}) => {
    switch(action.type) {
        case 'GET_ALL_WORDS':
            return Object.assign({}, state, { words: action.payload })
        case 'GET_ONE_WORD':
            return Object.assign({}, state, { word: action.payload })
        case 'TAGS_FOR_FUTURE_WORD':
            return Object.assign({}, state, { tagsForFutureWord: action.payload })
        case 'GET_WORDS_FOR_TOPIC':
            return Object.assign({}, state, { wordsForTopic: action.payload })
        default:
            return state
    }
}

export default wordsReducer;