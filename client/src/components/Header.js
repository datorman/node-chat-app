import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {startLogout} from './../actions/auth';

class Header extends Component {
    signOut = (e) => {
        e.preventDefault();
        axios.post('/api/users/logout',{}).then((res) => {
            this.props.startLogout(res);
            this.props.history.push('/'); 
        },(err) => {
            this.setState({
            })
        }); 
    }
    render(){
        return(
            <div>
                <div>logo here</div>
                <div><a href="#" onClick={this.signOut}>Sign Out</a></div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: (res) => dispatch(startLogout(res))
});

export default connect(undefined,mapDispatchToProps)(Header);