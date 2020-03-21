import React, { Component } from 'react'
import { Grid, Cell } from 'styled-css-grid'
import axios from 'axios'

class SuggestedImages extends Component {

    state = {
        images: []
    }

    componentDidMount() {
        let text = this.props.text.toLowerCase();

        //get images from pixabay
        axios.get(`https://pixabay.com/api/?key=13882338-d93b145945134ef80bc1b14a3&q=${text}&image_type=photo&per_page=7&safesearch=true`)
        .then(res => this.setState({images: res.data.hits}))
        .catch(err => console.log(err));
    }

    render(){
        let images = this.state.images
        let imagesList = []
        if(images.length > 0) {
            imagesList = images.map((image) => {
                return (
                    <Cell width={1}><img key={ image.id } src={ image.previewURL } style={{maxWidth: '100%'}} alt="image" /></Cell>
                )
            })
        }
        return (
            <Grid columns={7}>
                { imagesList }
            </Grid>
        )
    }
}

export default SuggestedImages;