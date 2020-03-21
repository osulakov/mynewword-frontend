import React from 'react';

const Search = (props) => {
    return (
        <input id='search' onChange={props.onChangeSearch} placeholder='Search your word'></input>
    )
}

export default Search;