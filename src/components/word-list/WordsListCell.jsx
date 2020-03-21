import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {Grid, Cell} from 'styled-css-grid';

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
    if(props.word.contentOrder !== undefined && props.word.contentOrder.length > 0) {
        descriptionText = props.word.contentOrder[0].content;
        if(descriptionText !== undefined && descriptionText.length > 60) {
            descriptionText = descriptionText.slice(0,60) + '...';
        }
    } 
    
    return (

        <td>
            <Grid columns={12}>
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
            </Grid>
            
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
