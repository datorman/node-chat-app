import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Room from './Room';
import {setRoomList} from './../../../actions/room';
import {setActiveRoom} from './../../../actions/activeRoom';

class Rooms extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:true,
            error:false,
        };
    }
    componentDidMount(){
        axios.get(' /api/rooms/list',{}).then((res) => {
            this.setState({rooms:res.data,isLoading:false});
            this.props.setRoomList(res.data);
        },(err) => {
            this.setState({
                isLoading:false,
                error: true 
            })
        }); 
    }
    setActiveRoom = (room) => {
        this.props.setActiveRoom(room);
    }
    renderContent(){
        if(this.state.isLoading === true){
            return <p>Loading ...</p>
        } else {
            return(
                <div>
                    {this.props.rooms.map((room) => <Link key={room._id} to="#" onClick={() => this.setActiveRoom(room)}><Room  {...room} /></Link>)}
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    rooms:state.rooms.rooms,
    activeRoom: state.activeRoom
});
const mapDispatchToProps = (dispatch) =>({
    setRoomList: (rooms) => dispatch(setRoomList(rooms)),
    setActiveRoom: (room) => dispatch(setActiveRoom(room))
});
export default connect(mapStateToProps,mapDispatchToProps)(Rooms);