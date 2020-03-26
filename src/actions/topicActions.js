import axios from 'axios';

import { HOST_URL } from '../constants';

import { updateWord } from '../actions/wordActions';

export const getAllTopics = () => (dispatch) => {
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    axios({
        method: 'GET',
        url: `${HOST_URL}/topic/`,
        headers: headers
    })
    
    .then(result => {
        let topics = result.data.topics;
        
        dispatch({type: 'GET_ALL_TOPICS', payload: topics})
    })
    .catch(err => {
        console.log(err)
    })
    
}

// export const getAllTopics = () => (dispatch) => {
//     getTopics()
//     .then(result => {
//         let topics = result.data.topics;
        
//         dispatch({type: 'GET_ALL_TOPICS', payload: topics})
//     })
//     .catch(err => {
//         console.log(err)
//     })
    
// }

function getTopics () {
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    return axios({
        method: 'GET',
        url: `${HOST_URL}/topic/`,
        headers: headers
    })
}

export const createTopic = (topicName, topicsForFutureWord) => (dispatch) => {
    console.log('actions try to create topic', topicName)
    createTop(topicName)
    .then((result) => {
        
        let topic = result.data.topic;
        console.log('topic is created', topic)
        topicsForFutureWord = [...topicsForFutureWord, topic]
        
        dispatch({type: 'TOPICS_FOR_FUTURE_WORD', payload: topicsForFutureWord})
        
    })
    .catch(err => {
        console.log(err)
    })
}

function createTop(topicName){
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;

    let data = {
        topicName: topicName
    }
    
    return axios({
        method: 'POST',
        url: `${HOST_URL}/topic/`,
        headers: headers,
        data: data
    })
}

export const clearTopicsForFutureWord = () => (dispatch) =>  {
    dispatch({type: 'TOPICS_FOR_FUTURE_WORD', payload: []})
}

export const setCurrentTopic = (topicName) => (dispatch) => {
    dispatch({type: 'SET_CURRENT_TOPIC', payload: topicName})
}

export const getWordsForOneTopic = (topicId) => (dispatch) => {
    console.log('actions getWordsForOneTopic', topicId);

    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    
    axios({
        method: 'GET',
        url: `${HOST_URL}/topic/getWordsForTopic/${topicId}`,
        headers: headers
    })
    .then(result => {
        
        let words = result.data.words;
        console.log('got words for topic', words)
        
        dispatch({type: 'GET_WORDS_FOR_TOPIC', payload: words})
    })
    .catch(err => {
        console.log(err)
    })
}

