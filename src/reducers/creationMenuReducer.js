const initialStateCreationMenu = {
    createContentItem: {},
    createSubtitle: false,
    createDescriptionNote: false,
    createUrlLink: false,
    createYoutubeVideo: false,
    createTranslation: false,
    createWikiInfo: false,
    createPhotoNote: false,
    createVideoNote: false,
    createAudioNote: false
}

const creationMenuReducer = (state=initialStateCreationMenu, action={}) => {
    switch(action.type) {
        case 'CREATE_CONTENT_ITEM':
            return Object.assign({}, state, {createContentItem: action.payload})
        case 'CREATE_SUBTITLE':
            return Object.assign({}, state, {createSubtitle: action.payload})
        case 'CREATE_DESCRIPTION_NOTE':
            return Object.assign({}, state, {createDescriptionNote: action.payload})
        case 'CREATE_URL_LINK':
            return Object.assign({}, state, {createUrlLink: action.payload})
        case 'CREATE_YOUTUBE_VIDEO':
            return Object.assign({}, state, {createYoutubeVideo: action.payload})
        case 'CREATE_TRANSLATION':
            return Object.assign({}, state, {createTranslation: action.payload})
        case 'CREATE_WIKI_INFO':
            return Object.assign({}, state, {createWikiInfo: action.payload})
        case 'CREATE_PHOTO_NOTE':
            return Object.assign({}, state, {createPhotoNote: action.payload})
        case 'CREATE_VIDEO_NOTE':
            return Object.assign({}, state, {createVideoNote: action.payload})
        case 'CREATE_AUDIO_NOTE':
            return Object.assign({}, state, {createAudioNote: action.payload})
        default:
            return state
    }
}

export default creationMenuReducer;



// case 'subTitle':
//                     return (
//                         <Cell key={item.id} width={12}><SubTitle subTitle={ item }/></Cell>
//                     )
//                 case 'descriptionNote':
//                     return (
//                         <Cell key={item.id} width={6}><DescriptionNote note={ item }/></Cell>
//                     )
//                 case 'urlLink':
//                     return (
//                         <Cell key={item.id} width={6}>Url Link</Cell>
//                     )
//                 case 'youtubeVideo':
//                     return (
//                         <Cell width={4}><YouTubeVideo urlLink={ item.content }/></Cell>
//                     )
//                 case 'translation':
//                     return (
//                         <Cell key={item.id} width={6}>Translation</Cell>
//                     )
//                 case 'wikiInfo':
//                     return (
//                         <Cell key={item.id} width={6}>wikiInfo</Cell>
//                     )
//                 case 'photoNote':
//                     return (
//                         <Cell key={item.id} width={6}>photoNote</Cell>
//                     )
//                 case 'videoNote':
//                     return (
//                         <Cell key={item.id} width={6}>videoNote</Cell>
//                     )
//                 case 'audioNote':
//                     return (
//                         <Cell key={item.id} width={6}>audioNote</Cell>
//                     )
//                 case 'suggestedImages':