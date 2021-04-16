import React, {useEffect, useContext, useState } from 'react';

export default function HeaderLinks (props) {  
  if(props.isLoggedIn){
      return (
        <>
          <li><a >{`${props.isLoggedIn.firstName} ${props.isLoggedIn.lastName}`} </a></li>
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
