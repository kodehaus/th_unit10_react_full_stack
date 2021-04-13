import React, {useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ApplicationContext } from '../context'

export default function SignIn (){  
  let history = useHistory();
  const [emailAddress, setEmailAddress] = useState('joe@smith.com');
  const [password, setPassword] = useState('joepassword');
  const { signIn} = useContext(ApplicationContext);
  const [message, setMessage] = useState('');
  let response = null;

  const handleSubmit = async e => {
    e.preventDefault();
    response = await signIn(emailAddress, password);
    if(response.status >= 300){
      setMessage(<h3 className='validation--errors'>The username or password is invalid. Please try again</h3>);
    } else {
      history.push('/')
    }
  }
  


  return (
    <main>
    <div className='form--centered'>
        <h2>Sign In</h2>
        {message}
        
        <form onSubmit={handleSubmit}>
            <label htmlFor='emailAddress'>Email Address</label>
            <input id='emailAddress' name='emailAddress' type='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password'  value={password} onChange={e => setPassword(e.target.value)} />
            <button className='button' type='submit'>Sign In</button><button className='button button-secondary' onClick='event.preventDefault(); location.href="index.html";'>Cancel</button>
        </form>
        <p>Don't have a user account? Click here to <a href='sign-up.html'>sign up</a>!</p>
        
    </div>
</main>
  )
};
