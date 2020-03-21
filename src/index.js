import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import mainReducer from './reducers/mainReducer';
import userReducer from './reducers/userReducer';
import wordsReducer from './reducers/wordsReducer';
import topicsReducer from './reducers/topicsReducer';
import creationMenuReducer from './reducers/creationMenuReducer';

const rootReducer = combineReducers({
    mainReducer,
    userReducer,
    wordsReducer,
    topicsReducer,
    creationMenuReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
