import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'

const  CourseDetailLinks = (props) => {  

    if(props.user && (props.ownerId === props.user.id)){
      return (
        <>
                <a className='button' href={`/update-course/${props.courseId}`}>Update Course</a>
                <a className='button' href={`/delete-course/${props.courseId}`}>Delete Course</a>
                <a className='button button-secondary' href='/'>Return to List</a>
        </>
      )
    } else {
      return (
        <>
                <a className='button button-secondary' href='/'>Return to List</a>
        </>
      )
    }


};

export default CourseDetailLinks;




