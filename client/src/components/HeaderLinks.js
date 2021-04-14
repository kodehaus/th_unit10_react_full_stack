import React, {useEffect, useContext, useState } from 'react';

export default function HeaderLinks (props) {  
  if(props.isLoggedIn){
      return (
        <>
          <li><a href="sign-up">{`${props.isLoggedIn.firstName} ${props.isLoggedIn.lastName}`} </a></li>
          <li><a href="sign-out">Sign Out</a></li>
        </>
      )
  } else {
    return (
      <>
        <li><a href="/sign-up">Sign Up</a></li>
        <li><a href="/sign-in">Sign In</a></li>
      </>
    )
  }
};
