import React, {useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ApplicationContext } from '../context'
import Header from '../Header';

const  DeleteCourseConfirmation = (props) => {  
  const { data, userIsLoggedIn} = useContext(ApplicationContext);
  const [deleted, setDeleted ]= useState({});
  let courseId = props.match.params.id;

  useEffect(() =>{
    if(courseId){
       data.deleteCourse(courseId, userIsLoggedIn)
        .then(response => {
          console.log(response)
        })
    }
  },[courseId, data])
  return (
    <Header />
     
  );
}

export default DeleteCourseConfirmation;