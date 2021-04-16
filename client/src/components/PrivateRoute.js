import React, { useContext } from 'react';
import { ApplicationContext } from './context'
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { userIsLoggedIn} = useContext(ApplicationContext);
if(userIsLoggedIn) {
    return (
      <Route {...rest} render={
        props => <Component {...rest} {...props} />
      } />
    )
} else {
  return (
    <Redirect to='/signin' />
  )
}

}

export default ProtectedRoute;