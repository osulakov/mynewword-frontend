import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { getAllWords } from '../actions/wordActions';
import { setCurrentTopic } from '../actions/topicActions';

import WordList from './WordList';

class MainContent extends Component {

    componentDidMount() {
        this.props.getAllWords();
    }

    chooseOneWord = () => {
        this.props.history.push("/oneword")
    }

    render() {
        //this.props.setCurrentTopic('')
        return (
            <div style={{marginTop: '20px'}}>
                <WordList words={this.props.words} chooseOneWord={this.chooseOneWord}/>
            </div>
            
            // <Grid columns={3} style={{marginTop: '20px'}}>
            //     <Cell width={2}>
                    
            //     </Cell>
            // </Grid>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        words: state.wordsReducer.words
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        getAllWords: () => dispatch(getAllWords()),
        setCurrentTopic: (topicName) => dispatch(setCurrentTopic(topicName))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(MainContent);
