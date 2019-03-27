import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            username: '',
            password: ''
        };
    };
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    };
    onSubmit = (e) => {
        e.preventDefault(); 
        this.props.history.push('/chat'); 
    };
    render() {
        return(
            <div>
                <form  onSubmit = {this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Email/Username"
                        autoFocus    
                        value = {this.state.username}
                        onChange = {this.onUsernameChange}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        autoFocus    
                        value = {this.state.password}
                        onChange = {this.onPasswordChange}
                    />
                    <button className="button">Login</button>
                </form>
                <span>Dont have an account?<Link to=" " onClick={this.props.toggleState}>Register Now</Link></span>
            </div>
            )
    }
}
export default Auth;