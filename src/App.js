import React from 'react';
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import OneWord from './components/OneWord';
import NewWord from './components/NewWord';
import TopicList from './components/TopicList';
import Connections from './components/Connections';
import Auth from './components/Auth';
import Account from './components/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={ MainContent } />
          <Route path='/oneword' component={ OneWord } />
          <Route path='/newword' component={ NewWord } />
          <Route path='/topics' component={ TopicList } />
          <Route path='/connections' component={ Connections } />
          <Route path='/auth' component={ Auth } />
          <Route path='/account' component={ Account } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
