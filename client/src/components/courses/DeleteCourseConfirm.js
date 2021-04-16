import React, {useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ApplicationContext } from '../context'

const  DeleteCourseConfirmation = (props) => {  
  const { data, userIsLoggedIn} = useContext(ApplicationContext);
  const [redirectPath, setRedirectPath] = useState({});
  let courseId = props.match.params.id;

  useEffect(() =>{
    (async function () {
      if(courseId){
        const response = await data.deleteCourse(courseId, userIsLoggedIn);
        if(response.status === 204){
          setRedirectPath('/')
        } else if(response.status === 404 ){
          setRedirectPath('/404/Not/Found')
        } else {
          setRedirectPath('/error')
        }
        console.log(response);
     }
    })()

  },[courseId, data, userIsLoggedIn])
  return (
    <Redirect to={redirectPath} />
  );
}

export default DeleteCourseConfirmation;