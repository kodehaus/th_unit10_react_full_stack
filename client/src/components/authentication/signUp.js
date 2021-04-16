import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import { useHistory } from "react-router-dom";
import copy from 'object-copy';

const  SignUp = (props) => {  
  let history = useHistory();

  const { data, signUp, userIsLoggedIn } = useContext(ApplicationContext);

  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    emailAddress:'',
    password:'',
    confirmPassword:''
  });

  const handleFieldUpdate = (e) => {
    var targetObj = {};
    copy(targetObj, signUpForm);
    targetObj[e.target.name] = e.target.value;
    setSignUpForm(targetObj);
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {}
    newUser['firstName'] = signUpForm.firstName;
    newUser['lastName'] = signUpForm.lastName;
    newUser['emailAddress'] = signUpForm.emailAddress;
    newUser['password'] = signUpForm.password;
        const user = await signUp(newUser, signUpForm.password)
    if(user){
      history.push('/')
    } else {
      console.log('throw errors');
    }

  }
  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <main>
    <div className="form--centered">
        <h2>Sign Up</h2>
        
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text" value={signUpForm.firstName.value} onChange={(e) => handleFieldUpdate(e)}/>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text" value={signUpForm.lastName.value}  onChange={(e) => handleFieldUpdate(e)}/>
            <label htmlFor="emailAddress">Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email" value={signUpForm.emailAddress.value}  onChange={(e) => handleFieldUpdate(e)}/>
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password" value={signUpForm.password.value}  onChange={(e) => handleFieldUpdate(e)}/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password" value={signUpForm.confirmPassword.value}  onChange={(e) => handleFieldUpdate(e)}/>
            <button className="button" type="submit">Sign Up</button>
            <button className='button button-secondary' onClick={handleCancel}>Cancel</button>
        </form>
        <p>Already have a user account? Click here to <a href="/sign-in">sign in</a>!</p>
    </div>
</main>
  )
};

export default SignUp;