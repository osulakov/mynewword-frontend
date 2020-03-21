import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Cell } from 'styled-css-grid';

import '../main.css';

import CreationMenu from './one-word/CreationMenu';
import NewContentItem from './one-word/NewContentItem';

import General from './one-word/General';
import SuggestedImages from './one-word/SuggestedImages';
import SubTitle from './one-word/SubTitle';
import DescriptionNote from './one-word/DescriptionNote';
import YouTubeVideo from './one-word/YoutubeVideo';

class OneWord extends Component {

    state = {
        word: {
            wordName: 'Apple',
            tags: ['fruit', 'green', 'red', 'circle', 'tasty', 'applejuice', 'iloveapples', 'apples', 'loveapples'],
            likes: 126,
            topics: ['Fruit', 'Plants', 'Food'],
            contentOrder: [
                {id: '16', type: 'descriptionNote', title: 'Apples',  content: 'Very tasty fruit'}
            ],
            isPrivate: false
        }
    }

    _onReady(e){
        e.target.pauseVideo();
    }

    render() {
        let newSubTitle = {
            content: 'Suggested Images from Pixabay'
        }
        let word = this.props.word
        let contentOrderList;
        if(word.contentOrder) {
            contentOrderList = word.contentOrder.map((item, index) => {
                switch(item.type) {
                    case 'subTitle':
                        return (
                            <Cell key={item.id} width={12}><SubTitle data={ item }/></Cell>
                        )
                    case 'descriptionNote':
                        return (
                            <Cell key={item.id} width={6}><DescriptionNote data={ item } /></Cell>
                        )
                    case 'urlLink':
                        return (
                            <Cell key={item.id} width={6}>Url Link</Cell>
                        )
                    case 'youtubeVideo':
                        return (
                            <Cell width={4}><YouTubeVideo urlLink={ item.content }/></Cell>
                        )
                    case 'translation':
                        return (
                            <Cell key={item.id} width={6}>Translation</Cell>
                        )
                    case 'wikiInfo':
                        return (
                            <Cell key={item.id} width={6}>wikiInfo</Cell>
                        )
                    case 'photoNote':
                        return (
                            <Cell key={item.id} width={6}>photoNote</Cell>
                        )
                    case 'videoNote':
                        return (
                            <Cell key={item.id} width={6}>videoNote</Cell>
                        )
                    case 'audioNote':
                        return (
                            <Cell key={item.id} width={6}>audioNote</Cell>
                        )
                    case 'suggestedImages':
                        return (
                            <>
                            <Cell key={item.id} width={12}><SubTitle subTitle={ newSubTitle }/></Cell>
                            <Cell key={item.id} width={12}><SuggestedImages text={ word.wordName }/></Cell>
                            </>
                        )
                    default:
                        return (
                            <div>No data</div>
                        )
                }
            })
            console.log('OneWord', word.contentOrder)
        }
        return (
            <div className='one-word-component-main-container'>
                <Grid columns={12}>
                    <Cell width={12}><General word={word}/></Cell>
                    {this.props.isOpen ? (
                        <Cell width={12}><NewContentItem/></Cell>
                    ):(
                        <> </>
                    )}
                    { contentOrderList }
                    <Cell width={12}><CreationMenu/></Cell>
                </Grid>
            </div>
        ) 
    }
}

const MapStateToProps = (state) => {
    return {
        word: state.wordsReducer.word,
        isOpen:  state.creationMenuReducer.createContentItem.isOpen
    }
}

const MapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(MapStateToProps, MapDispatchToProps)(OneWord);


// <Grid columns={12}>
            //         <Cell width={12}><General word={word}/></Cell> 
            //         <Cell width={12}><SubTitle subTitle={ word.contentOrder[0] }/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={12}><SubTitle subTitle={ word.contentOrder[17] }/></Cell>
            //         <Cell width={4}><YouTubeVideo id='-N8ssJQapUk'/></Cell>
            //         <Cell width={4}><YouTubeVideo id='Ff1ecYv24-E'/></Cell>
            //         <Cell width={4}><YouTubeVideo id='rpNQJTKgZKs'/></Cell>
            //         <Cell width={12}><SubTitle subTitle={ word.contentOrder[18] }/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={12}><SubTitle subTitle={ word.contentOrder[17] }/></Cell>
            //         <Cell width={4}><YouTubeVideo id='-N8ssJQapUk'/></Cell>
            //         <Cell width={4}><YouTubeVideo id='Ff1ecYv24-E'/></Cell>
            //         <Cell width={4}><YouTubeVideo id='rpNQJTKgZKs'/></Cell>
            //         <Cell width={12}><SubTitle subTitle={ word.contentOrder[18] }/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[7]}/></Cell>
            //         <Cell width={6}><DescriptionNote note={word.contentOrder[6]}/></Cell>
            //     </Grid>

// {id: '30', type: 'suggestedImages'},
//                 {id: '1', type: 'subTitle', content: 'Main info'},
//                 {id: '16', type: 'descriptionNote', title: 'Apples',  content: 'Very tasty fruit'},
//                 {id: '1', type: 'urlLink', content: 'https://www.nutrition-and-you.com/apple-fruit.html'},
//                 {id: '13', type: 'urlLink', content: 'https://www.nutrition-and-you.com/apple-fruit.html'},
//                 {id: '14', type: 'urlLink', content: 'https://www.nutrition-and-you.com/apple-fruit.html'},
//                 {id: '15', type: 'urlLink', content: 'https://www.nutrition-and-you.com/apple-fruit.html'},
//                 {id: '2', type: 'descriptionNote', title: 'Apple fruit nutrition facts', content: 'Delicious and crunchy, apple fruit is one of the most popular and favorite fruits among the health conscious, fitness lovers who firmly believe in the concept of “health is wealth.”'},
//                 {id: '3', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '4', type: 'youtubeVideo', content: 'https://www.youtube.com/watch?v=-N8ssJQapUk'},
//                 {id: '5', type: 'youtubeVideo', content: 'https://www.youtube.com/watch?v=-N8ssJQapUk'},
//                 {id: '6', type: 'youtubeVideo', content: 'https://www.youtube.com/watch?v=-N8ssJQapUk'},
//                 {id: '7', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '8', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '9', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '10', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '11', type: 'descriptionNote', title: 'More about apples', content: 'Apples are obtained from medium-sized tree belonging to the Rosaceae family.'},
//                 {id: '12', type: 'translation', from: 'EN', to: 'RU', content: 'yabloko'},
//                 {id: '28', type: 'subTitle', content: 'Youtube videos'},
//                 {id: '29', type: 'subTitle', content: 'A bit more about apples'}