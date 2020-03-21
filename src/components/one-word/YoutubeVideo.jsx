import React from 'react';
import YouTube from 'react-youtube';

const YoutubeVideo = (props) => {
    const opts = {
        height: '150px',
        width: '270px'
    }
    let buttonStyle = {
        backgroundColor: '#bbdefb',
        color: 'white',
        borderRadius: '2px'
    }
    let videoId = props.urlLink.split('=')[1]
    return (
        <>
            <YouTube videoId={videoId} opts={opts}/>
            <button style={buttonStyle}>Delete</button>
        </>
    )
} 

export default YoutubeVideo;