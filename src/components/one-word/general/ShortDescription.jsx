import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateWord } from '../../../actions/wordActions';

import '../../../css/OneWord.css';

class ShortDescription extends Component {

    state = {
        shortDescription: '',
        hover: false,
        editMode: false
    }

    componentDidMount() {
        this.setState({shortDescription: this.props.shortDescription});
    }

    changeShortDescription = (e) => {
        this.setState({shortDescription: e.target.value});
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

    editItemSubmit = () => {
        let word = this.props.word;
        word.shortDescription = this.state.shortDescription;

        this.props.updateWord(word);
        this.setState({editMode: false});
    }

    render(){
        
        if(this.state.editMode) {
            return (
                <>
                <input 
                    id='word-short-description-item-edit-mode'
                    type='text'
                    onChange={this.changeShortDescription}
                    value={this.state.shortDescription}
                />
                <button onClick={this.editItemSubmit}>Save</button>
                </>
            )
        } else {
            return (
                <div onMouseEnter={ this.toggleHoverIn } onMouseLeave={ this.toggleHoverOut }>
                    <div><b style={{color: 'grey'}}>Short Description:</b></div>
                    <div className='one-word-short-description-box'>
                        {!this.state.hover ? (
                            <>{this.props.shortDescription}</>
                        ):(
                            <>
                                {this.props.shortDescription}
                                <button onClick={this.toEditMode}>Edit</button>
                            </>
                        )}
                    </div>
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

export default connect(MapStateToProps, MapDispatchToProps)(ShortDescription);