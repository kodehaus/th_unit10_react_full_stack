import React, {useEffect, useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { ApplicationContext } from '../context'
import ErrorDetail from '../ErrorDetail';

export default function SignIn (){  
  let history = useHistory();
  const [errors, setErrors] = useState([]);
  
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const { signIn} = useContext(ApplicationContext);
  let response = null;

  const handleSubmit = async e => {
    e.preventDefault();
    response = await signIn(emailAddress, password);
    if(response.status >= 300){
      setErrors([{message: `The username or password is invalid. Please try again`}]);
    } else {
      history.push('/')
    }
  }
  
  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <main>
    <div className='form--centered'>
        <h2>Sign In</h2>
            <ErrorDetail title='Authentication Errors' errors={errors} />
        
        <form onSubmit={handleSubmit}>
            <label htmlFor='emailAddress'>Email Address</label>
            <input id='emailAddress' name='emailAddress' type='email' value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
            <label htmlFor='password'>Password</label>
            <input id='password' name='password' type='password'  value={password} onChange={e => setPassword(e.target.value)} />
            <button className='button' type='submit'>Sign In</button>
            <button className='button button-secondary' onClick={handleCancel}>Cancel</button>
        </form>
        <p>Don't have a user account? Click here to <a href='/signup'>sign up</a>!</p>
        
    </div>
</main>
  )
};
