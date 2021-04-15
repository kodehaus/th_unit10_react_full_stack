import React from 'react';
import { useHistory } from "react-router-dom";

const  SignUp = (props) => {  
  let history = useHistory();

  const handleCancel = (e) => {
    e.preventDefault();
    history.push('/')
  }

  return (
    <main>
    <div className="form--centered">
        <h2>Sign Up</h2>
        
        <form>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" type="text"  />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" type="text"  />
            <label htmlFor="emailAddress">Email Address</label>
            <input id="emailAddress" name="emailAddress" type="email"  />
            <label htmlFor="password">Password</label>
            <input id="password" name="password" type="password"  />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" name="confirmPassword" type="password"  />
            <button className="button" type="submit">Sign Up</button>
            <button className='button button-secondary' onClick={handleCancel}>Cancel</button>
        </form>
        <p>Already have a user account? Click here to <a href="/sign-in">sign in</a>!</p>
    </div>
</main>
  )
};

export default SignUp;