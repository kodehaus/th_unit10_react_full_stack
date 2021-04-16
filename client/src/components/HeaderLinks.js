import React from 'react';

export default function HeaderLinks (props) {  
  if(props.isLoggedIn){
      return (
        <>
          <li>{`${props.isLoggedIn.firstName} ${props.isLoggedIn.lastName}`}</li>
          <li><a href="/signout">Sign Out</a></li>
        </>
      )
  } else {
    return (
      <>
        <li><a href="/signup">Sign Up</a></li>
        <li><a href="/signin">Sign In</a></li>
      </>
    )
  }
};
