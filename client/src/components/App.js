import React, { Component } from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Auth from './auth/Auth';
import Chat from './chat/Chat';

export const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Route exact path="/" component={Auth} />
          <Route exact path="/chat" component={Chat} />
        </Router>
      </div>
    );
  }
}

export default App;
