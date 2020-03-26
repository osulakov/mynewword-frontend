import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
//import {Grid, Cell} from 'styled-css-grid';

import { deleteWord } from '../../actions/wordActions';

import TrashCanSVG from './TrashCanSVG';

const DeleteButton = styled.div`
    background: red;
    color: white;
    text-align: center;
    padding: 0px;
    margin: auto;
    border-radius: 2px
`;
 
const WordsListCell = props => {
    let descriptionText = '';
    if(props.word.shortDescription) {
        descriptionText = props.word.shortDescription;
        if(descriptionText !== undefined && descriptionText.length > 60) {
            descriptionText = descriptionText.slice(0,60) + '...';
        }
    } 
    
    return (

        <td>
            <div className='row'>
                <div className='col s10'>
                    <div className="left-align blue-text text-darken-2">{props.word.wordName}</div>
                    <div className="left-align grey-text ">{descriptionText}</div>
                </div>
                {props.deleteMode ? (
                    <div className='col s2'>
                        <DeleteButton 
                            style={{cursor: 'pointer'}} 
                            onClick={() => {props.deleteWord(props.word._id)}}
                        >
                            <TrashCanSVG/>
                        </DeleteButton>
                    </div>
                ):(
                    <>
                    </>
                )}
            </div>
        </td>
        
    )
}

const MapStateToProps = (state) => {
    return {
        deleteMode: state.mainReducer.deleteMode
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        deleteWord: (id) => dispatch(deleteWord(id))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(WordsListCell);

WordsListCell.propTypes = {
    wordName: PropTypes.string,
    contentOrder: PropTypes.array
}


{/* <Grid columns={12}>
                <Cell width={10}>
                    <div className="left-align blue-text text-darken-2">{props.word.wordName}</div>
                    <div className="left-align grey-text ">{descriptionText}</div>
                </Cell>
                {props.deleteMode ? (
                    <Cell width={2}>
                        <DeleteButton 
                            style={{cursor: 'pointer'}} 
                            onClick={() => {props.deleteWord(props.word._id)}}
                        >
                            <TrashCanSVG/>
                        </DeleteButton>
                    </Cell>
                ):(
                    <>
                    </>
                )}
            </Grid> */}