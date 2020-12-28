import React from 'react';
import Home from '../Components/Home';
import Login from '../Components/Auth/Login';
import Register from '../Components/Auth/Register';
import ForgotPassword from '../Components/Auth/ForgotPassword';
const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    },
    {
        path : '/register',
        exact : false,
        main : ({location}) => <Register location={location} />
    },
    {
        path : '/forgot-password',
        exact : false,
        main : ({location}) => <ForgotPassword location={location} />
    }
];

export default routes;