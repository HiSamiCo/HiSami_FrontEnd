import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const PrivateRoute = ({ component: Component, admin, isAdmin, ...rest }) => {
    const token = localStorage.getItem('token');

    if (admin && !isAdmin) return <Redirect to='/login' />

    return <Route {...rest} render={(props) => {
        if (token) {
            return <Component {...props} />
        } else {
            return <Redirect to='/login' />
        }
    }}/>
}

const mapStateToProps = state => ({
    isAdmin: state.isAdmin
})

export default connect(mapStateToProps)(PrivateRoute);