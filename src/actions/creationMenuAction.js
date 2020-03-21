export const createContentItem = (data) => (dispatch) => {
    dispatch({type: 'CREATE_CONTENT_ITEM', payload: data})
}

export const saveItem = (item) => (dispatch) => {
    dispatch({type: 'CREATE_CONTENT_ITEM', payload: {isOpen: false}})
}

export const cancel = () => (dispatch) => {
    dispatch({type: 'CREATE_CONTENT_ITEM', payload: {isOpen: false}})
}








const createSubtitle = (data) => (dispatch) => {
    dispatch({type: 'CREATE_SUBTITLE', payload: data})
}

const createDescriptionNote = (data) => (dispatch) => {
    dispatch({type: 'CREATE_DESCRIPTION_NOTE', payload: data})
}

const createUrlLink = (data) => (dispatch) => {
    dispatch({type: 'CREATE_URL_LINK', payload: data})
}

const createYoutubeVideo = (data) => (dispatch) => {
    dispatch({type: 'CREATE_YOUTUBE_VIDEO', payload: data})
}

const createTranslation = (data) => (dispatch) => {
    dispatch({type: 'CREATE_TRANSLATION', payload: data})
}

const createWikiInfo = (data) => (dispatch) => {
    dispatch({type: 'CREATE_WIKI_INFO', payload: data})
}

const createPhotoNote = (data) => (dispatch) => {
    dispatch({type: 'CREATE_PHOTO_NOTE', payload: data})
}

const createVideoNote = (data) => (dispatch) => {
    dispatch({type: 'CREATE_VIDEO_NOTE', payload: data})
}

const createAudioNote = (data) => (dispatch) => {
    dispatch({type: 'CREATE_AUDIO_NOTE', payload: data})
}