import React,{Component} from 'react';
import io from 'socket.io-client';
import App from './App'
import { SocketProvider } from './socket/socket-context';

class SocketWrapper extends Component{
    state = {
        socket: null
    }
    componentDidMount(){
        this.connectSocket();
    }
    connectSocket = () => {
        try{
            this.setState({
                socket: io.connect('http://localhost:5000', {
                    transports: ['websocket'],
                    reconnectionAttempts: 15
                })
            });
        }catch(err){
            console.log(err);
        }
    }
    render(){
        return(
            <SocketProvider>             
                <App socket={this.state.socket}/>
            </SocketProvider>
        )
    }
}

export default SocketWrapper;