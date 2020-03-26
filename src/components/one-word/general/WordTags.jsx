import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';
import { connect } from 'react-redux';

import { updateWord } from '../../../actions/wordActions';

import Tag from './word-tags/Tag';

import '../../../css/OneWord.css';

class WordTags extends Component {

    state = {
        addNewMode: false,
        tag: ''
    }

    handleChangeTag = (e) => {
        this.setState({tag: e.target.value});
    }

    handleInputTag = () => {
        this.setState({addNewMode: true})
    }

    handlePressEnterTag = (e) => {
        if(e.key === 'Enter') {
            let word = this.props.word;
            let tag = this.state.tag;
            let tags = word.tags;

            tags = [...tags, tag]
            word.tags = tags;
            this.props.updateWord(word);
            this.setState({tag: '', addNewMode: false})
        }
    }

    render(){
        let tags = this.props.tags
        let styles = {
            
        }
        let tagsList = ''
        if (tags !== undefined && tags.length > 0) {
            tagsList = tags.map((tag, index) => {
                return (
                    <Cell key={index} width={1}> 
                        <Tag tag={tag}/>
                    </Cell>
                )
            })
        }
        
        return (
            <div style={styles}>
                <div style={{color: 'grey'}}><b>Tags</b></div>
                <Grid columns='repeat(auto-fit,minmax(120px,1fr))'>
                    {tagsList}
                    {this.props.justCreatingWordMode ? (
                        <>
                        </>
                    ):(
                        <>
                        {this.state.addNewMode ? (
                            <Cell>
                                <input 
                                    id='add-tag' 
                                    type='text' 
                                    placeholder='Tag' 
                                    onChange={this.handleChangeTag} 
                                    value={this.state.tag} 
                                    onKeyDown={this.handlePressEnterTag}
                                />
                            </Cell>
                        ):(
                            <Cell s>
                                <button className='add-new-tag-button' onClick={this.handleInputTag}>+</button>
                            </Cell>
                        )}
                        </>
                    )}
                    
                </Grid>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        tagsForFutureWord: state.wordsReducer.tagsForFutureWord,
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateWord: (word) => dispatch(updateWord(word))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(WordTags);