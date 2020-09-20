import React  from 'react'
import { Route, Redirect } from 'react-router-dom';


export default function PrivateRoute({component: Component, ...rest}) {
  //check token or anything prove that user auth...
var isLogin = () => localStorage.getItem('user')
  
   return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route {...rest} render={props => (
        isLogin() ?
            <Component {...props} />
        : <Redirect to="/" />
    )} />
);
}
