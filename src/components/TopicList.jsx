import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { getAllTopics, getWordsForOneTopic, setCurrentTopic } from '../actions/topicActions';

import '../css/TopicList.css';

import TopicListCell from './topic-list/TopicListCell';
import WordList from './WordList';


class TopicList extends Component {

    componentDidMount() {
        this.props.getAllTopics()
        console.log(this.props.topics)
    }

    chooseOneTopic = (topic) => {
        //should appear Words List for one topic
        console.log('choose one topic', topic._id)
        this.props.setCurrentTopic(topic.topicName);
        this.props.getWordsForOneTopic(topic._id);
    }

    chooseOneWord = () => {
        this.props.history.push("/oneword")
    }

    render () {
        let topics = this.props.topics;
        let topicList = [];
        if(topics !== undefined || topics.length > 0) {
            topicList = topics.map((topic) => {
                return (
                    <tr key={topic._id} onClick={() => {this.chooseOneTopic(topic)}}>
                        <TopicListCell topic={topic}/>
                    </tr>
                )
            })
        }

        return (
            <Grid columns={12}>
                <Cell width={4}>
                    <table className='highlight'>
                        <thead>
                            <tr className='topic-list-table-header'>
                                <td>
                                    <Grid columns={5}>
                                        <Cell width={3}>Topic Name</Cell>
                                        <Cell width={2}>Words</Cell>
                                    </Grid>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {topicList}
                        </tbody>
                    </table>
                </Cell>
                <Cell width={1}></Cell>
                <Cell width={7}>
                    {this.props.currentTopic ? (
                        <WordList words={this.props.words} chooseOneWord={this.chooseOneWord}/>
                    ):(
                        <p style={{color: 'grey'}}>Choose any Topic from existed in the table on the left side</p>
                    )}
                </Cell>
            </Grid>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        topics: state.topicsReducer.topics,
        currentTopic: state.topicsReducer.currentTopic,
        words: state.wordsReducer.wordsForTopic
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        getAllTopics: () => dispatch(getAllTopics()),
        getWordsForOneTopic: (topicId) => dispatch(getWordsForOneTopic(topicId)),
        setCurrentTopic: (topicName) => dispatch(setCurrentTopic(topicName))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(TopicList);
 