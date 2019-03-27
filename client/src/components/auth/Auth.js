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
            return <Login history={this.props.history} onSubmit={this.onSubmit} toggleState={this.toggleLoginState}/>
        } else {
            return <Register history={this.props.history} onSubmit={this.onSubmit} toggleState={this.toggleLoginState}/>
        } 
    }
    toggleLoginState = (e)=>{
        e.preventDefault();
        this.setState({login:!this.state.login});
    }
    render() {
        return(
            <div>
                <h2>Login/Register</h2>
                {this.renderContent()}
            </div>
            )
    }
}
export default Auth;