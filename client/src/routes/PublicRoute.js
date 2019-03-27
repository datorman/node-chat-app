import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = (
        {auth, 
        component: Component,
        ...rest
}) => (
    <Route {...rest} component = {(props) => (
        auth ? (
            <Redirect to="/chat" />
        ):(
            <Component  {...props} />
        )
    )}/>
);

const mapStateToProps = (state) =>({
    auth : !!state.auth.token
});

export default connect(mapStateToProps)(PublicRoute);