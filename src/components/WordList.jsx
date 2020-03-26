import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Grid, Cell } from 'styled-css-grid';

import { changeDeleteMode } from '../actions/mainActions';
import { getAllWords } from '../actions/wordActions';
import { getOneWord } from '../actions/wordActions';

import '../css/WordList.css';

import WordsListCell from './word-list/WordsListCell';
import WordListTool from './word-list/WordListTool';
import Search from './word-list/Search';

class WordList extends Component {

    state = {
        sortingMode: true, //true - for ascending sort, false - for descendong sort 
        filterMode: 'all', // all, month, week, day
        searchString: ''
    }

    componentDidMount() {
        this.props.getAllWords();
    }

    reloadData = () => {
        this.props.getAllWords();
    }

    onChangeSearch = (e) => {
        this.setState({
            searchString: e.target.value
        })
    }

    sortingSwitcher = () => {

        let val = this.state.sortingMode;
        val = !val;
        this.setState({
            sortingMode: val
        })
    }

    dayFilter = () => {
        this.setState({
            filterMode: 'day'
        })
    }

    weekFilter = () => {
        
        this.setState({
            filterMode: 'week'
        })
    }

    monthFilter = () => {
        
        this.setState({
            filterMode: 'month'
        })
    }

    allFilter = () => {
        
        this.setState({
            filterMode: 'all'
        })
    }

    clickWord = (id) => {
        this.props.getOneWord(id)

        this.props.chooseOneWord()
        
    }

    render() {
        let words = this.props.words;
        let tableSection = {};
        let wordsArray = [];

        if(words !== undefined && words.length !== 0) {
            //searching words
            if(this.state.searchString !== '') {
                words = words.filter((word) => {
                    let searchStr = this.state.searchString
                
                    if(word.wordName) {
                        return word.wordName.includes(searchStr)
                    } 
                })
            }
            
            //sorting words
            if (this.state.sortingMode) {
                words.sort((a, b) => (a.wordName > b.wordName)? 1 : -1);
            } else {
                words.sort((a, b) => (a.wordName < b.wordName)? 1 : -1);
            }

            //separating words in sections in table by alphabet
            for(let word of words){
                let str = word.wordName;
                let firstChar = str[0];
                firstChar = firstChar.toUpperCase();
                if (!tableSection[firstChar]) {
                    tableSection[firstChar] = [word]
                } else {
                    let wordsForOneChar = tableSection[firstChar];
                    tableSection[firstChar] = [...wordsForOneChar, word];
                    if (this.state.sortingMode) {
                        tableSection[firstChar].sort((a, b) => (a.wordName > b.wordName)? 1 : -1);
                    } else {
                        tableSection[firstChar].sort((a, b) => (a.wordName < b.wordName)? 1 : -1);
                    }
                }
            }
            
            //creating a special array which will be ready to map() and will give us a list with cell's header-section consequence
            Object.keys(tableSection).forEach((key, index) => {
                let subArray = [key, tableSection[key]];
                wordsArray.push(subArray);
            });
        }
        
        const wordsList = this.props.words !== undefined ? (wordsArray.map((subArray) => {
            let headerText = subArray[0];
            let words = subArray[1];
            return (
                <div key={wordsArray.indexOf(subArray)}>
                    <table className="highlight">
                        <thead style={{backgroundColor: 'gray'}}>
                            <tr>
                                <td style={{padding: '1px'}}><AlphabetHeader headerText={headerText}/></td> 
                            </tr>
                        </thead>
                        <tbody>
                            {words.map((word) => {
                                let id = word._id
                                if(this.props.deleteMode){
                                    return (
                                        <tr key={id}>
                                            <WordsListCell word={word}/>
                                        </tr>
                                    )
                                }else {
                                    return (
                                        <tr key={id} onClick={() => {this.clickWord(id)}}>
                                            <WordsListCell word={word}/>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </table>   
                </div>
            )
        })) : (
            <>
            <p style={{margin: 'auto', textAlign: 'center'}}>No data</p>
            <button style={{margin: 'auto'}} onClick={this.reloadData}>Reload</button>
            </>
        )

        return (
            
            <div className='row'>
                <div className='col s7 m8 l8'>
                    <div className='words-list'>
                        {this.props.currentTopic ? (
                            <p><b>Words for topic: &nbsp;</b>{this.props.currentTopic}</p>
                        ):(
                            <>
                            </>
                        )}
                        <WordListTool 
                                dayFilter={this.dayFilter} 
                                weekFilter={this.weekFilter} 
                                monthFilter={this.monthFilter} 
                                allFilter={this.allFilter}
                                sortingSwitcher={this.sortingSwitcher} 
                                sortingMode={this.state.sortingMode}
                                filterMode={this.state.filterMode}
                        />
                        <Search onChangeSearch={this.onChangeSearch}/>
                        { wordsList }
                    </div>
                </div>
            </div>
        )
    }
}

const MapStateToProps = (state) => {
    return {
        deleteMode: state.mainReducer.deleteMode,
        currentTopic: state.topicsReducer.currentTopic
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        getAllWords: () => dispatch(getAllWords()),
        getOneWord: (id) => dispatch(getOneWord(id))
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(WordList);

const AlphabetHeader = props => {
    return (
        <div style={{textAlign: 'left', color: 'white'}}>{props.headerText}</div>
    )
}

WordList.propTypes = {
    words: PropTypes.array
}

//style={{width: '60%', margin: '5px', marginTop: '10px'}}