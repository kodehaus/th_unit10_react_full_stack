import React, { Component } from 'react';
import Data from '../data'
import Cookies from 'js-cookie';


const ApplicationContext = React.createContext(); 

export class Provider extends Component {
  constructor() {
    super();
    this.data = new Data();
  }
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser')
  };

  render() {
    const {authenticatedUser} = this.state;
    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut
      }
    };

    return (
      <ApplicationContext.Provider value={value}>
        {this.props.children}
      </ApplicationContext.Provider>  
    );
  }

  
  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    if(user !== null){
      this.setState(() => {
        return {
          authenticatedUser: user
        };
      });

      // Set cookie
      Cookies.set('authenticatedUser', JSON.stringify(user), {expires: 1});
    }
    return user;
  }

  signOut = () => {
    this.setState(() => {
      return {
        authenticatedUser: null,
      }
    })
    Cookies.remove('authenticatedUser')
  }
}

export const Consumer = ApplicationContext.Consumer;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <ApplicationContext.Consumer>
        {context => <Component {...props} context={context} />}
      </ApplicationContext.Consumer>
    );
  }
}