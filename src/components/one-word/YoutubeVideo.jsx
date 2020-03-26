import React from 'react';
import YouTube from 'react-youtube';
import { Grid, Cell } from 'styled-css-grid';

const YoutubeVideo = (props) => {
    let opts = {
        width: '100%',
        height: '100%'
    }
    let videoId = props.urlLink.split('=')[1]
    return (
        <div className='youtube-video-item-box'>
            <div>
                <YouTube videoId={videoId} opts={opts}/>
            </div>
            <Grid columns={2} columnGap={0}>
                <Cell className='youtube-video-item-button' width={1}>Watch</Cell>
                <Cell className='youtube-video-item-button' width={1}>Delete</Cell>
            </Grid>
        </div>
    )
} 

export default YoutubeVideo;