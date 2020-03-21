import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import { deleteTagFromWord } from '../../../../actions/wordActions';

class Tag extends Component {

    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    handleDeleteTag = () => {
        console.log('deleting tag')

        let tag = this.props.tag;
        let word = this.props.word;

        this.props.deleteTagFromWord(word, tag);
    }
    
    render() {
        let tag = this.props.tag
        let backgroundColor;
        if(this.state.hover) {
            backgroundColor = '#bdbdbd'
        } else {
            backgroundColor = '#03a9f4'
        }
        let styles = {
            borderRadius: '2px',
            border: '1px solid grey',
            backgroundColor: backgroundColor,
            color: 'white',
            textAlign: 'center'
        }
        return (
            <div style={styles} onMouseEnter={ this.toggleHover } onMouseLeave={ this.toggleHover }>
                <Grid columns={5}>
                    {!this.state.hover ? (
                        <Cell width={4}>{tag}</Cell>
                    ):(
                        <>
                            <Cell width={4}>{tag}</Cell>
                            <Cell width={1} onClick={this.handleDeleteTag}>X</Cell>
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
        deleteTagFromWord: (word, tag) => dispatch(deleteTagFromWord(word, tag))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Tag);