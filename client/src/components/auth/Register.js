import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            username: '',
            password: '',
            verifyPassword:'',
            email:'',
            error:false
        };
    }
    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({username}));
    }
    onEmailChange = (e) => {
        const email = e.target.value;
        this.setState(() => ({email}));
    }
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({password}));
    }
    onVerifyPasswordChange = (e) => {
        const verifyPassword = e.target.value;
        this.setState(() => ({verifyPassword}));

    }
    onSubmit = (e) => {
        console.log('submit',this.state);
        e.preventDefault();
        if(!this.state.error){
            axios.post('/api/users/create',{params:{
                name:this.state.username,
                email:this.state.email,
                password:this.state.password
            }}).then((res) => {
                this.props.history.push('/chat'); 
            },(err) => {
                this.setState({
                    isLoading:false,
                    error: true 
                })
            }); 
        }
        
    }
    render() {
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Username"
                        autoFocus    
                        value = {this.state.username}
                        onChange = {this.onUsernameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Email"
                        autoFocus    
                        value = {this.state.email}
                        onChange = {this.onEmailChange}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        autoFocus    
                        value = {this.state.password}
                        onChange = {this.onPasswordChange}
                    />
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        autoFocus    
                        value = {this.state.verifyPassword}
                        onChange = {this.onVerifyPasswordChange}
                    />
                    <button className="button">Register</button>
                </form>
                <span>Have an account?<Link to=" " onClick={this.props.toggleState}>Login Here</Link></span>
            </div>
            )
    }
}
export default Register;