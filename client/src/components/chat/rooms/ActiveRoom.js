import React, { Component } from 'react';
import Users from './../users/Users';
import {connect} from 'react-redux';

class ActiveRoom extends Component {
    constructor(props){
        super(props);
        this.state = {
            messages: ''
        }  
    };
    renderContent(){
        if(this.props.activeRoom){
            return <div><h2>{this.props.activeRoom.name}</h2></div>
        } else{
            return <div>Loading ...</div>
        }
    }
    componentDidMount(){
        //Load all messages here
    }
    render(){
        return(
            <div>
                <Users />
                {this.renderContent()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    activeRoom: state.activeRoom.activeRoom
});
export default connect(mapStateToProps)(ActiveRoom);