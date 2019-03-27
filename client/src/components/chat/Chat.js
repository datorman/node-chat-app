import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

import Rooms from './rooms/Rooms';
import ActiveRoom from './rooms/ActiveRoom';

export const history = createBrowserHistory();

class Chat extends Component {
  render() {
    return (
      <div className="ChatApp">
        <Rooms />
        <ActiveRoom />
      </div>
    );
  }
}

export default Chat;
