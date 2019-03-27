import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Auth extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            email: '',
            password: ''
        };
    };
    onUsernameChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    };
    onSubmit = (e) => {
        e.preventDefault(); 
        axios.post('/api/users/login',{
            params:{
                email:this.state.email,
                password:this.state.password
            }
        }).then((res) => {
            this.props.history.push('/chat'); 
        },(err) => {
            this.setState({
                isLoading:false,
                error: true 
            })
        }); 
    };
    render() {
        return(
            <div>
                <form  onSubmit = {this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Email"
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