import React, { useState } from 'react';
import Data from '../data'
import Cookies from 'js-cookie';


export const ApplicationContext = React.createContext()

export const Provider = (props) => {
  const [data, setData] = useState(new Data())
  const [userIsLoggedIn, setUserIsLoggedin] = useState(Cookies.getJSON('authenticatedUser'));


  return (
    <ApplicationContext.Provider value={{ 
      loggedIn: userIsLoggedIn,
      signIn,signOut,
      userIsLoggedIn,
      data
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
  function signOut() {
    setUserIsLoggedin(null);
    Cookies.remove('authenticatedUser')
  }
};