import React, { Component } from 'react'
import { Grid, Cell } from 'styled-css-grid';
import Topic from './word-topics/Topic';

class WordTopics extends Component {

    render(){
        let topics = this.props.topics;
        
        let styles = {
            
        }
        let topicsList = ''
        if(topics !== undefined && topics.length > 0) {
            topicsList = topics.map((topic, index) => {
                return (
                    <Cell key={index} width={1}> 
                        <Topic topic={topic}/>
                    </Cell>
                )
            })
        }
        
        return (
            <div style={styles}>
                <div style={{color: 'grey'}}><b>Topics</b></div>
                <Grid columns={4}>{topicsList}</Grid>
            </div>
        )
    }
}

export default WordTopics;