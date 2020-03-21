import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { deleteTopicFromWord } from '../../../../actions/wordActions';

class Topic extends Component {

    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    handleDeleteTopic = () => {
        console.log('deleting topic')
        let topicId = this.props.topic._id;
        let word = this.props.word;

        this.props.deleteTopicFromWord(word, topicId);
        
    }
    
    render() {
        let topic = this.props.topic
        let backgroundColor;
        if(this.state.hover) {
            backgroundColor = '#bdbdbd'
        } else {
            backgroundColor = 'transparent'
        }
        let styles = {
            borderRadius: '2px',
            border: '1px solid grey',
            backgroundColor: backgroundColor,
            color: 'grey',
            textAlign: 'center'
        }
        return (
            <div style={styles} onMouseEnter={ this.toggleHover } onMouseLeave={ this.toggleHover }>
                <Grid columns={5}>
                    {!this.state.hover ? (
                        <Cell width={4}>{topic.topicName}</Cell>
                    ):(
                        <>
                            <Cell width={3}>{topic.topicName}</Cell>
                            <Cell width={1} onClick={this.handleDeleteTopic}>X</Cell>
                        </>
                    )}
                </Grid>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        deleteTopicFromWord: (word, topicId) => dispatch(deleteTopicFromWord(word, topicId))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Topic);