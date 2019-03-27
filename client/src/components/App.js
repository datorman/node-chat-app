import React, { Component } from 'react';
import {Router, Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {connect} from 'react-redux';

import Auth from './auth/Auth';
import Chat from './chat/Chat';

export const history = createBrowserHistory();

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log(this.props);
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
const mapStateToProps = (state) => ({
    auth:state.auth.token,
    user:state.auth.user
});
export default connect (mapStateToProps)(App);
