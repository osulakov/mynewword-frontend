import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { createNewWord, getAllWords, createNewTag, clearTagsForFutureWord } from '../actions/wordActions';
import { getAllTopics, createTopic, clearTopicsForFutureWord } from '../actions/topicActions';

import '../css/NewWord.css';

import WordTopics from './one-word/general/WordTopics';
import WordTags from './one-word/general/WordTags';

class NewWord extends Component {

    state = {
        wordName: '',
        topicName: '',
        tag: '',
        isPrivate: true,
        didNotEnterWordName: true
    }

    componentDidMount(){
        // this.props.getAllTopics();
    }

    handleChangeWordName = (e) => {
        this.setState({wordName: e.target.value, didNotEnterWordName: true});
    }

    handleChangeTopic = (e) => {
        this.setState({topicName: e.target.value});
    }

    handleChangeTag = (e) => {
        this.setState({tag: e.target.value});
    }

    handleIsPrivateToggle = () => {
        this.setState({isPrivate: !this.state.isPrivate});
    }

    handlePressEnterTopic = (e) => {
        if(e.key === 'Enter') {
            let topicName = this.state.topicName;
            topicName = topicName[0].toUpperCase() + topicName.slice(1)

            this.props.createTopic(topicName, this.props.topicsForFutureWord)

            this.setState({topicName: ''})
        }
    }

    handlePressEnterTag = (e) => {
        if(e.key === 'Enter') {
            let tag = this.state.tag;
            this.props.createNewTag(tag, this.props.tagsForFutureWord)
            this.setState({tag: ''})
        }
    }

    handleNext = () => {
        if(!this.state.wordName) {
            this.setState({didNotEnterWordName: false});
        } else {
            let topics = [];
            let tags = [];
            if(this.props.topicsForFutureWord.length > 0) {
                topics = this.props.topicsForFutureWord;
            }
            if (this.props.tagsForFutureWord.length > 0) {
                tags = this.props.tagsForFutureWord;
            }
            
            let word = {
                wordName: this.state.wordName,
                topics: topics,
                tags: tags,
                isPrivate: this.state.isPrivate
            };
            
            this.props.createNewWord(word);

            this.props.clearTopicsForFutureWord();
            this.props.clearTagsForFutureWord();

            this.props.history.push('/oneword');
        }
        
    }

    render() {
        let wordNameStarStyle;
        let wordNameBorderStyle;
        if(this.state.didNotEnterWordName) {
            wordNameStarStyle = {
                textAlign: 'right',
                color: 'grey'
            }
            wordNameBorderStyle = {
                border: '1px solid transparent'
            }
        } else {
            wordNameStarStyle = {
                textAlign: 'right',
                color: 'red'
            }
            wordNameBorderStyle = {
                border: '1px solid red'
            }
        }
        console.log('all topics in NewWord', this.props.topics)
        return (
            <div className='create-new-word-container'>
                <p>Creating a New Word</p>
                <Grid columns={12}>
                    <Cell width={1} style={wordNameStarStyle}>*</Cell>
                    <Cell width={10}>
                        <input 
                            style={wordNameBorderStyle}
                            id='wordName' 
                            type='text' 
                            placeholder='Enter Your Word' 
                            onChange={this.handleChangeWordName} 
                            value={this.state.wordName} 
                        />
                    </Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={10}>
                        <WordTopics topics={this.props.topicsForFutureWord}/>
                    </Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={10}>
                        <input 
                            id='topic' 
                            type='text' 
                            placeholder='Type the Topic and press Enter' 
                            onChange={this.handleChangeTopic} 
                            value={this.state.topicName} 
                            onKeyDown={this.handlePressEnterTopic}
                        />
                    </Cell>
                    {/* <Cell width={3}>
                        <TopicsSelector existedTopics={this.props.topics ? this.props.topics:[]} />
                    </Cell> */}
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={10}>
                        <WordTags tags={this.props.tagsForFutureWord} justCreatingWordMode={true}/>
                    </Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={10}>
                        <input 
                            id='tag' 
                            type='text' 
                            placeholder='Type the Tag and press Enter' 
                            onChange={this.handleChangeTag} 
                            value={this.state.tag} 
                            onKeyDown={this.handlePressEnterTag}
                        />
                    </Cell>
                    <Cell width={1}>&nbsp;</Cell>
                    <Cell width={4} onClick={this.handleIsPrivateToggle}>
                        <IsPrivateToggle isPrivate={this.state.isPrivate} />
                    </Cell>
                    <Cell width={6}>&nbsp;</Cell>
                    <Cell width={2}>
                        <button style={{
                                    margin: '10px',
                                    padding: '10px', 
                                    backgroundColor: '#03a9f4', 
                                    color: 'white'
                                }}
                                onClick={this.handleNext}
                        >
                            NEXT
                        </button>
                    </Cell>
                </Grid>
                 
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        topics: state.topicsReducer.topics,
        topicsForFutureWord: state.topicsReducer.topicsForFutureWord,
        tagsForFutureWord: state.wordsReducer.tagsForFutureWord,
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        createNewWord: (word) => dispatch(createNewWord(word)),
        getAllTopics: () => dispatch(getAllTopics()),
        createTopic: (topicName, topicsForFutureWord) => dispatch(createTopic(topicName, topicsForFutureWord)),
        clearTopicsForFutureWord: () => dispatch(clearTopicsForFutureWord()),
        createNewTag: (tag, tagsForFutureWord) => dispatch(createNewTag(tag, tagsForFutureWord)),
        clearTagsForFutureWord: () => dispatch(clearTagsForFutureWord())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(NewWord);


const IsPrivateToggle = (props) => {
    
    let privateButtonStyle;
    let publicButtonStyle;
    if(props.isPrivate) {
        privateButtonStyle = {
            border: 'none',
            borderRadius: '3px',
            backgroundColor: '#03a9f4',
            color: 'white'
        }
        publicButtonStyle = {
            border: '1px solid transparent',
            borderRadius: '3px',
            backgroundColor: 'transparent',
            color: 'grey'
        }
    } else {
        privateButtonStyle = {
            border: '1px solid transparent',
            borderRadius: '3px',
            backgroundColor: 'transparent',
            color: 'grey'
        }
        publicButtonStyle = {
            border: 'none',
            borderRadius: '3px',
            backgroundColor: '#03a9f4',
            color: 'white'
        }
    }
    return (
        <Grid className='is-private-toggle-box' columns={2} columnGap={'0'}>
            <Cell width={1} style={privateButtonStyle}>Private</Cell>
            <Cell width={1} style={publicButtonStyle}>Public</Cell>
        </Grid>
    )
}

const TopicsSelector = (props) => {
    let existedTopicsList = props.existedTopics.map((topic, index) => {
        return (
            <a key={index} href="#">{topic.topicName}</a>
        )
    })
    return (
        <div className='topics-selector-container'>
            <button className='topics-selector-btn'>Select Topic</button>
            <div className='topics-selector-content'>
                {existedTopicsList}
            </div>
        </div>
    )
}