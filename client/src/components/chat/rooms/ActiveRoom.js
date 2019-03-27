import React, { Component } from 'react';
import Users from './../users/Users';

class ActiveRoom extends Component {
    render(){
        return(
            <div>
                <Users />
                <div>Active Room here</div>
            </div>
        );
    }
}

export default ActiveRoom;