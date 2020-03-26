import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteContentItem, updateWord } from '../../actions/wordActions';

class DescriptionNote extends Component {

    state = {
        hover: false,
        title: '',
        content: '',
        editMode: false
    }

    componentDidMount(){
        let descriptionNote = this.props.data;
        let title = descriptionNote.title;
        let content = descriptionNote.content;

        this.setState({
            title: title,
            content: content
        })
    }

    toggleHoverIn = () => {
        this.setState({hover: true})
    }

    toggleHoverOut = () => {
        this.setState({hover: false})
    }

    deleteItem = () => {
        let word = this.props.word;
        let id = this.props.data.id;
        this.props.deleteContentItem(word, id);
    }

    toEditMode = () => {
        this.setState({editMode: true})
    }

    changeTitle = (e) => {
        this.setState({title: e.target.value});
    }

    changeContent = (e) => {
        this.setState({content: e.target.value})
    }

    editItemSubmit = () => {

        let item = this.props.data;
        let word = this.props.word;
        let contentOrder = word.contentOrder;

        let index = 0;
        contentOrder.forEach((_item, _index) => {
            if(_item.id === item.id) {
                index = _index;
            }
        })

        contentOrder = contentOrder.filter((_item) => {
            return _item.id !== item.id
        })

        item.title = this.state.title;
        item.content = this.state.content;

        contentOrder.splice(index, 0, item);

        word.contentOrder = contentOrder;

        this.props.updateWord(word);
        this.setState({editMode: false});
        this.toggleHoverOut();
    }

    render () {
        let data = this.props.data //id, type, title, content
        let containerStyle = { 
            marginTop: '5px',
            padding: '5px',
            borderRadius: '2px'
        }
        let changedStyle;
        if(this.state.hover) {
            changedStyle = { backgroundColor: '#eeeeee' }
        } else {
            changedStyle = { backgroundColor: '#e0e0e0' }
        }
        containerStyle = Object.assign({}, containerStyle, changedStyle)
        let buttonStyle = {
            backgroundColor: '#bbdefb',
            color: 'white',
            borderRadius: '2px'
        }

        if(this.state.editMode){
            return (
                <>
                <input 
                    id='description-note-item-edit-mode-title'
                    type='text'
                    onChange={this.changeTitle}
                    value={this.state.title}
                />
                <textarea 
                    id='description-note-item-edit-mode-content'
                    type='text'
                    onChange={this.changeContent}
                    value={this.state.content}
                />
                <button onClick={this.editItemSubmit}>Save</button>
                </>
            )
        } else {
            return (
                <div style={containerStyle} onMouseEnter={ this.toggleHoverIn } onMouseLeave={ this.toggleHoverOut }>
                    <div><b>{data.title}</b></div>
                    {this.state.hover ? (
                        <div>
                            { data.content }
                            <button 
                                style={buttonStyle}
                                onClick={this.toEditMode}
                            >Edit</button>
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
}

const MapStateToProps = (state) => {
    return {
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        deleteContentItem: (word, id) => dispatch(deleteContentItem(word, id)),
        updateWord: (word) => dispatch(updateWord(word))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(DescriptionNote);