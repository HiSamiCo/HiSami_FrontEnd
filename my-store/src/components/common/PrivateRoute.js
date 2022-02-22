import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import decode from "jwt-decode"
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
    const token = localStorage.getItem('token');

    if (admin && !decode(token).admin) return <Redirect to='/login' />

    return <Route {...rest} render={(props) => {
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login' />
        }
    }}/>
}


export default connect()(PrivateRoute);