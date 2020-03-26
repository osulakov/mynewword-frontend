import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWord } from '../../../actions/wordActions';

class WordName extends Component {

    state = {
        hover: false,
        editMode: false,
        wordName: ''
    }

    componentDidMount() {
       
    }

    toggleHoverIn = () => {
        this.setState({hover: true})
    }

    toggleHoverOut = () => {
        this.setState({hover: false})
    }

    toEditMode = () => {
        this.setState({editMode: true})
    }

    changeWordName = (e) => {
        this.setState({ wordName: e.target.value})
    }

    editItemSubmit = () => {
        let word = this.props.word;
        word.wordName = this.state.wordName;

        this.props.updateWord(word);
        this.setState({editMode: false});
    }

    render() {
        let backgroundColor;
        if(this.state.hover) {
            backgroundColor = '#e0e0e0'
        } else {
            backgroundColor = 'transparent'
        }
        let styles = {
            color: '#2196f3',
            padding: '8px',
            borderRadius: '3px',
            backgroundColor: backgroundColor,
            fontSize: '25px'
        }
        
        if(this.state.editMode) {
            return (
                <>
                <input 
                    id='word-name-item-edit-mode'
                    type='text'
                    onChange={this.changeWordName}
                    value={this.state.wordName}
                />
                <button onClick={this.editItemSubmit}>Save</button>
                </>
            )
        } else {
            return (
                <div style={styles} onMouseEnter={ this.toggleHoverIn } onMouseLeave={ this.toggleHoverOut }>
                    {!this.state.hover ? (
                        <>{this.props.name}</>
                    ):(
                        <>
                            {this.props.name}
                            <button onClick={this.toEditMode}>Edit</button>
                        </>
                    )}
                </div>
            )
        }
    }
}

const MapStateToProps = (state) => {
    return {
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateWord: (word) => dispatch(updateWord(word))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(WordName);