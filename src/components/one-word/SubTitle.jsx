import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteContentItem } from '../../actions/wordActions';

import '../../css/ContentItems.css';

class SubTitle extends Component {

    state = {
        hover: false
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    deleteItem = () => {
        let word = this.props.word;
        let id = this.props.data.id;
        this.props.deleteContentItem(word, id)
    }

    render () {
        let data = this.props.data //id, type, title, content
        let containerStyle = { 
            margin: '0px',
            padding: '5px',
            borderRadius: '2px'
        }
        let changedStyle;
        if(this.state.hover) {
            changedStyle = { backgroundColor: '#e0e0e0', color: 'white' }
        } else {
            changedStyle = { backgroundColor: 'grey', color: 'white' }
        }
        containerStyle = Object.assign({}, containerStyle, changedStyle)
        let buttonStyle = {
            backgroundColor: '#bbdefb',
            color: 'white',
            borderRadius: '2px'
        }
        return (
            <div style={containerStyle} onMouseEnter={ this.toggleHover } onMouseLeave={ this.toggleHover }>
                {this.state.hover ? (
                    <div>
                        { data.content }
                        <button style={buttonStyle}>Edit</button>
                        <button 
                            style={buttonStyle} 
                            onClick={this.deleteItem}
                        >Delete</button>
                    </div>
                ):(
                    <div>{ data.content }</div>
                )}
                
                
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
        deleteContentItem: (word, id) => dispatch(deleteContentItem(word, id))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(SubTitle);