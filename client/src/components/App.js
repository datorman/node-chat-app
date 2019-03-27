import React, { Component } from 'react';
import {Router, Route,Switch,Redirect} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {connect} from 'react-redux';

import Auth from './auth/Auth';
import Chat from './chat/Chat';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';

export const history = createBrowserHistory();

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      
      <div className="App">
        <Router history={history}>
          <PublicRoute 
            exact={true}
            path="/" 
            component={Auth} 
          />
          <PrivateRoute 
            exact={true} 
            path="/chat" 
            component={Chat} />
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
