import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/NewContentItem.css';

import { cancel, saveItem } from '../../actions/creationMenuAction';
import { updateWord } from '../../actions/wordActions';

class NewContentItem extends Component {

    state = {
        title: '',
        content: '',
        to: '',
        from: ''
    }

    componentDidMount(){
        // let item = this.props.createContentItem;
        // this.setState({
        //     title: item.title,
        //     content: item.content,
        //     to: item.to,
        //     from: item.from
        // })
    }

    changeTitle = (e) => {
        let title = e.target.value;
        this.setState({title: title});
    }

    changeContent = (e) => {
        let content = e.target.value;
        this.setState({content: content});
    }

    cancel = () => {
        this.props.cancel();
    }

    save = () => {
        let item = {
            ...this.props.createContentItem,
            ...this.state,
            isOpen: false
        }
        let word = this.props.word;
        word.contentOrder = [...word.contentOrder, item]
        this.props.saveItem();
        this.props.updateWord(word);
        
    }

    render() {

        let item = this.props.createContentItem;
        
        if(item.type === 'subTitle') {
            return (
                <div className='new-content-item-box'>
                    <button className='new-content-item-cancel-button' onClick={this.cancel}>X</button>
                    <p>Create new SubTitle</p>
                    <input 
                        id='content' 
                        type='text' 
                        placeholder='Enter your text here and press Save' 
                        onChange={this.changeContent}
                        value={this.state.content}
                    />
                    <button className='new-content-item-save-button' onClick={this.save}>ADD</button>
                </div>
            )
        } else if(item.type === 'descriptionNote') {
            return (
                <div className='new-content-item-box'>
                    <button className='new-content-item-cancel-button' onClick={this.cancel}>X</button>
                    <p>Create new Description Note</p>
                    <input 
                        id='title' 
                        type='text' 
                        placeholder='Enter Title' 
                        onChange={this.changeTitle}
                        value={this.state.title}
                    />
                    <textarea 
                        id='content' 
                        type='text' 
                        height='200px'
                        placeholder='Enter content and press SAVE' 
                        onChange={this.changeContent}
                        value={this.state.content}
                        style={{border: 'none', height: '200px'}}
                    />
                    <button className='new-content-item-save-button' onClick={this.save}>ADD</button>
                </div>
            )
        } else if(item.type === 'youtubeVideo') {
            return (
                <div className='new-content-item-box'>
                    <button className='new-content-item-cancel-button' onClick={this.cancel}>X</button>
                    <p>Add new Youtube Video</p>
                    <input 
                        id='content' 
                        type='text' 
                        placeholder='Enter Youtube link here and press Save' 
                        onChange={this.changeContent}
                        value={this.state.content}
                    />
                    <button className='new-content-item-save-button' onClick={this.save}>ADD</button>
                </div>
            )
        } else {
            return (
                <>
                </>
            )
        }
    }
}

const MapStateToProps = (state) => {
    return {
        createContentItem: state.creationMenuReducer.createContentItem,
        word: state.wordsReducer.word
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        updateWord: (word) => dispatch(updateWord(word)),
        saveItem: () => dispatch(saveItem()),
        cancel: () => dispatch(cancel())
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(NewContentItem);

{/* <Modal ariaHideApp={false} isOpen={this.props.createContentItem.isOpen} className='new-content-item-modal'>
                    <button onClick={this.cancel}>X</button>
                    <p>Create new SubTitle</p>
                    <input 
                        id='content' 
                        type='text' 
                        placeholder='Enter your text here and press Save' 
                        onChange={this.changeContent}
                        value={this.state.content}
                    />
                    <button className='new-content-item-save-button' onClick={this.save}>SAVE</button>
                </Modal> */}

