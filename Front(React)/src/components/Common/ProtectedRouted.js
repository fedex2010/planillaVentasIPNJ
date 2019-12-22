//Dependencies
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'


const ProtectedRouted = (props) =>{
  const { component: Component, urlRedirect, functionDeControl, ...rest } = props

  let avanzar = functionDeControl()

  return (
    <Route {...rest} render={(props) => (
        avanzar ? <Component {...props} />
        : <Redirect to={"/welcome"} />
    )} />
  )

} 


export default ProtectedRouted;

