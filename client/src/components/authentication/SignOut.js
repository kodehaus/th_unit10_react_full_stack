import React, { useEffect, useContext} from 'react';
import { Redirect } from 'react-router-dom';
import { ApplicationContext } from '../context'

const  SignOut = (props) => {  
  const { signOut} = useContext(ApplicationContext);
  useEffect(() => {
    signOut();
  });

  return (
    <Redirect to="/" />
  );
}

export default SignOut;