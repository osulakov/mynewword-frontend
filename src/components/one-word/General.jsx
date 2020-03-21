import React, { Component } from 'react';
import { Grid, Cell } from 'styled-css-grid';

import WordName from './general/WordName';
import WordTags from './general/WordTags';
import WordTopics from './general/WordTopics';

class General extends Component {

    render() {
        let word = this.props.word
        let styles = {
            backgroundColor: 'grey',
            textAlign: 'left',
            color: 'white',
            borderRadius: '3px',
            marginBottom: '5px',
            padding: '4px'
        }
        let styles2 = {
            backgroundColor: 'transparent'
        }
        return (
            <>
            <div style={styles}>
                General Info
            </div>
            <div style={styles2}>
                <Grid columns={6} columnGap='7px'>
                    <Cell width={2}><WordName name={word.wordName}/></Cell>
                    <Cell width={3}><WordTopics topics={word.topics}/></Cell>
                    <Cell width={1}><IsPrivate isPrivate={word.isPrivate}/></Cell>
                    <Cell width={5}><WordTags tags={word.tags} justCreatingWordMode={false}/></Cell>
                    <Cell width={1}><WordLikes likes={word.likes}/></Cell>
                </Grid>
            </div>
            </>
        )
    }
}

export default General;


const WordLikes = (props) => {
    let likes = props.likes
    let styles = {
        padding: '5px',
        border: '1px solid grey',
        borderRadius: '3px',
    }
    return (
        <div style={styles}>
            <Grid columns={3}>
                <Cell width={1} style={{color: 'red', textAlign: 'right'}}>&#10084;</Cell>
                <Cell width={2} style={{color: 'grey', textAlign: 'center'}}>{likes} Likes</Cell>
            </Grid>
        </div>
    )
}

const IsPrivate = (props) => {
    let isPrivate = props.isPrivate
    let styles = {
        padding: '5px',
        border: '1px solid grey',
        borderRadius: '3px',
        color: '#0288d1',
        backgroundColor: '#f5f5f5',
        textAlign: 'center'
    }
    return (
        <div style={styles}>
            {isPrivate ? (<>Is Private</>):(<>Is Public</>)}
        </div>
    )
}