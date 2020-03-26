import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { Grid, Cell } from 'styled-css-grid';
import { connect } from 'react-redux';

import { updateWord } from '../../actions/wordActions';

import WordName from './general/WordName';
import WordTags from './general/WordTags';
import WordTopics from './general/WordTopics';
import ShortDescription from './general/ShortDescription';

import '../../css/OneWord.css';

class General extends Component {

    isPrivateChange = () => {
        let word = this.props.word;
        word.isPrivate = !word.isPrivate;
        this.props.updateWord(word);
    }

    likeIt = () => {
        var token = localStorage.getItem('token');
        var decoded = jwt.decode(token);
        var userId = decoded.userId;

        let word = this.props.word;
        let iLiked = false;
        let likes = word.likes;
        likes.forEach((like) => {
            if(like === userId) {
                iLiked = true;
            }
        })
        if(!iLiked) {
            likes = [...likes, userId];
            word.likes = likes;
            this.props.updateWord(word);
        } else {
            likes = likes.filter((like) => {
                return like !== userId;
            })
            word.likes = likes;
            this.props.updateWord(word);
        }
    }

    render() {
        let word = this.props.word;
        
        return (
            <>
            <div className='row' >
                <div className='col s8 m10 l12'>
                    <div className='one-word-general-info-box'>
                        General Info
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col s8 m5 l5'>
                    <WordName name={word.wordName}/>
                </div>
                <div className='col s8 m5 l7'>
                    <ShortDescription shortDescription={word.shortDescription}/>
                </div>
                <div className='col s8 m5 l5'>
                    <WordTopics topics={word.topics}/>
                </div>
                <div className='col s8 m5 l7'>
                    <WordTags tags={word.tags} justCreatingWordMode={false}/>
                </div> 
            </div>
            <div className='row'>
                <div className='col s4 offset-s0  m2 offset-m8 l2 offset-l10'>
                    <IsPrivate isPrivate={word.isPrivate} isPrivateChange={this.isPrivateChange}/>
                </div>
                <div className='col s4 offset-s0  m2 offset-m8 l2 offset-l10'>
                    <WordLikes likes={word.likes} likeIt={this.likeIt}/>
                </div>
            </div>
            </>
        )
    }
}

const MapStateToProps = (state) => {
    return {

    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateWord: (word) => dispatch(updateWord(word))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(General);


const WordLikes = (props) => {
    var token = localStorage.getItem('token');
    var decoded = jwt.decode(token);
    var userId = decoded.userId;
    let likes = props.likes;

    let likesCount;
    let iLiked = false;

    if(likes === undefined || likes.length === 0) {
        likesCount = 0;
    } else {
        likesCount = likes.length;
        likes.forEach((like) => {
            if(like === userId) {
                iLiked = true;
            }
        })
    }

    let likesMessage = '';
    if(likesCount === 1) {
        likesMessage = 'Like';
    } else {
        likesMessage = 'Likes';
    }

    let heardSymbolClass = '';
    if(iLiked) {
        heardSymbolClass = 'one-word-likes-heart-i-liked'
    } else {
        heardSymbolClass = 'one-word-likes-heart';
    }

    return (
        <div className='one-word-likes-box' onClick={props.likeIt}>
            <Grid columns={3}>
                <Cell width={1} className={heardSymbolClass}>&#10084;</Cell>
                <Cell width={2} style={{color: 'grey', textAlign: 'center'}}>{likesCount} {likesMessage}</Cell>
            </Grid>
        </div>
    )
}

const IsPrivate = (props) => {
    let isPrivate = props.isPrivate;
    
    return (
        <div className='one-word-is-private-box' onClick={props.isPrivateChange}>
            {isPrivate ? (<>Is Private</>):(<>Is Public</>)}
        </div>
    )
}