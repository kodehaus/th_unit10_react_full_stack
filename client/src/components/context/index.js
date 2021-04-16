import React, { useState } from 'react';
import Data from '../data'
import Cookies from 'js-cookie';


export const ApplicationContext = React.createContext()

export const Provider = (props) => {
  const [userIsLoggedIn, setUserIsLoggedin] = useState(Cookies.getJSON('authenticatedUser'));
  const data = new Data();


  return (
    <ApplicationContext.Provider value={{ 
      loggedIn: userIsLoggedIn,
      signIn,signOut,signUp,
      userIsLoggedIn,
      data: data
    }}>
      { props.children }
    </ApplicationContext.Provider>
  );

  async function signIn  (username, password) {
    const user = await data.getUser(username, password);
    if(user.data.message == null){
      user.data['password'] = password;
      setUserIsLoggedin(user.data);
      // Set cookie
      Cookies.set('authenticatedUser', JSON.stringify(user.data), {expires: 1});
    }
    return user;
  }

  async function signUp(newUser, password) {
    const response = await data.createUser(newUser)
    if(response.status === 200){
      response.data[0]['password'] = password;
      setUserIsLoggedin(response.data[0]);
      // Set cookie
      Cookies.set('authenticatedUser', JSON.stringify(response.data[0]), {expires: 1});
    }
    return response;
  }
  function signOut() {
    setUserIsLoggedin(null);
    Cookies.remove('authenticatedUser')
  }
};