import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

import Rooms from './rooms/Rooms';
import ActiveRoom from './rooms/ActiveRoom';
import { withSocketContext } from './../socket/socket-context';

export const history = createBrowserHistory();

class Chat extends Component {
  componentDidMount() {
    const { socket } = this.props;
    if(!!socket) {
        if(socket.connected) {
          socket.emit('createMessage', () => {
            console.log('hello');
          });
        }
    }
    
  }
  render() {
    return (
      <div className="ChatApp">
        <Rooms />
        <ActiveRoom />
      </div>
    );
  }
}

export default withSocketContext(Chat);