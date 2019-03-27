import React, {Component} from 'react';


import Register from './Register';
import Login from './Login';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            login:true
        };
    }
    renderContent(){
        if(this.state.login){
            return <Login />
        } else {
            return <Register />
        }
    }
    render() {
        return(
            <div>
                {this.renderContent()}
            </div>
            )
    }
}
export default Auth;