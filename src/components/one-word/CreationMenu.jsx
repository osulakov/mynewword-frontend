import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../../css/CreationMenu.css';

import { createContentItem } from '../../actions/creationMenuAction';

class CreationMenu extends Component {

    componentDidMount() {
        
    }

    createNewContentItem = (type) => {
        let id = Math.floor(Math.random() * 1000000);
        let data = {
            isOpen: true,
            id: id,
            type: type
        }
        this.props.createContentItem(data)
    }

    render() {


        return (
            <div className='creation-menu-container'>
                <button className='creation-menu-btn'>+</button>
                <div className='creation-menu-content'>
                    <a href="#" onClick={() => {this.createNewContentItem('subTitle')}}>Subtitle</a>
                    <a href="#">Tag</a>
                    <a href="#" onClick={() => {this.createNewContentItem('descriptionNote')}}>Description Note</a>
                    <a href="#">URL Link</a>
                    <a href="#">YouTube Video</a>
                    <a href="#">Translation</a>
                    <a href="#">Wiki Info</a>
                    <a href="#">Photo Note</a>
                    <a href="#">Video Note</a>
                    <a href="#">Audio Note</a>
                </div>
            </div>
        )
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        createContentItem: (data) => dispatch(createContentItem(data))
    }
}

export default connect(null, MapDispatchToProps)(CreationMenu);