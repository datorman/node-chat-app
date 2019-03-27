import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = (
        {auth, 
        component: Component,
        ...rest
}) => (
    <Route {...rest} component = {(props) => (
        auth ? (
            <Component  {...props} />
        ):(
            <Redirect to="/" />
        )
    )}/>
);

const mapStateToProps = (state) =>({
    auth : !!state.auth.token
});

export default connect(mapStateToProps)(PrivateRoute);