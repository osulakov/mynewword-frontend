import axios from 'axios';
import jwt from 'jsonwebtoken';

import { HOST_URL } from '../constants';

export const getAllWords = () => (dispatch) => {
    var token = localStorage.getItem('token');
        if(token){
            getWords()
            .then(docs => {
                console.log(docs.data.words)
                dispatch({type: 'GET_ALL_WORDS', payload: [...docs.data.words]})
            })
            .catch(err => {
                console.log(err)
            })
        }
    
}

function getWords () {

    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    return axios({
        method: 'GET',
        url: `${HOST_URL}/word/`,
        headers: headers
    })

}

export const createNewWord = (word) => (dispatch) => {
    
    let token = localStorage.getItem('token');
    if(token) {
        createWord(word)
        .then(res => {
            let word = res.data.result;
            
            let message = res.data.message;
            
            dispatch({type: 'GET_ONE_WORD', payload: word})
        })
    }    
}

function createWord (word) {

    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;

    let data = {
        wordName: word.wordName,
        tags: word.tags,
        isPrivate: word.isPrivate,
        topics: word.topics,
        contentOrder: []
    }
    
    return axios({
        method: 'POST',
        url: `${HOST_URL}/word/`,
        headers: headers,
        data: data
    })
}

export const updateWord = (word) => (dispatch) => {
    updateW(word)
    .then(res => {
        let word = res.data.word;
        dispatch({type: 'GET_ONE_WORD', payload: word})
    })
}

function updateW (word) {
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;

    let params = word._id;

    let data = [
        { "propName": "wordName", "value": word.wordName},
        { "propName": "score", "value": word.score},
        { "propName": "tags", "value": word.tags},
        { "propName": "likes", "value": word.likes},
        { "propName": "isPrivate", "value": word.isPrivate},
        { "propName": "topics", "value": word.topics},
        { "propName": "contentOrder", "value": word.contentOrder}
    ]
    
    return axios({
        method: 'PATCH',
        url: `${HOST_URL}/word/${params}`,
        headers: headers,
        data: data
    })
}

export const deleteContentItem = (word, id) => (dispatch) => {
    word.contentOrder = word.contentOrder.filter((item) => {
        return item.id !== id
    })
    updateW(word)
    .then(result => {
        let word = result.data.word;
        dispatch({type: 'GET_ONE_WORD', payload: word})
    })
}

export const getOneWord = (id) => (dispatch) => {
    var token = localStorage.getItem('token');
        if(token){
            getWord(id)
            .then(res => {
                let word = res.data.word
                dispatch({type: 'GET_ONE_WORD', payload: word})
            })
            .catch(err => {
                console.log(err)
            })
        }
}

function getWord (id) {
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    return axios({
        method: 'GET',
        url: `${HOST_URL}/word/${id}`,
        headers: headers
    })
}

export const deleteTopicFromWord = (word, topicId) => (dispatch) => {
    let topics = word.topics;
    topics = topics.filter((topic) => {
        return topic._id !== topicId
    })

    word.topics = topics;

    updateW(word)
    .then(res => {
        let word = res.data.word;
        dispatch({type: 'GET_ONE_WORD', payload: word})
    })
}

export const createNewTag = (tag, tagsForFutureWord) => dispatch => {
    tagsForFutureWord.push(tag);
    dispatch({type: 'TAGS_FOR_FUTURE_WORD', payload: tagsForFutureWord})
}

export const clearTagsForFutureWord = () => (dispatch) => {
    dispatch({type: 'TAGS_FOR_FUTURE_WORD', payload: []})
}

export const deleteTagFromWord = (word, tag) => (dispatch) => {
    let tags = word.tags;
    tags = tags.filter((tagToDelete) => {
        return tag != tagToDelete
    })

    word.tags = tags;

    updateW(word)
    .then(res => {
        let word = res.data.word;
        dispatch({type: 'GET_ONE_WORD', payload: word})
    })
}

export const deleteWord = (id) => (dispatch) => {
    console.log('delete word action', id)
    //needs to use API to delete the word.
    //after this - should get all words again and to change wordsList  -------------------------
    deleteW(id)
    .then(docs => {
        dispatch({type: 'GET_ALL_WORDS', payload: [...docs.data.words]})
    })
    .catch(err => {
        console.log(err)
    })
}

function deleteW (wordId) {
    let token = localStorage.getItem('token');
    token = `Bearer ${token}`;
    const headers = {
        'Content-Type': 'application/json',
    }
    headers["Authorization"] = token;
    return axios({
        method: 'DELETE',
        url: `${HOST_URL}/word/${wordId}`,
        headers: headers
    })
}