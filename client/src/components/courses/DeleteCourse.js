import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'


const  Delete = (props) => {  
  const { data } = useContext(ApplicationContext);
  const [course, setCourse ]= useState({});
  let courseId = props.match.params.id;

  useEffect(() =>{
    if(courseId){
       data.getCourse(courseId)
        .then(response => {
            setCourse(response.data.course);
        })
    }
  },[courseId, data])

  return (
    <main>
        <div className='actions--bar'>
          <div className='wrap'>
            <a className='button' href={`/courses/${props.match.params.id}/delete/confirm`}>Confirm Delete</a>
            <a className='button' href={`/courses/${props.match.params.id}`}>Cancel</a>
            <a className='button button-secondary' href='/'>Return to List</a>
          </div>
        </div>
        <main>
            <div className='wrap'>
                <h2>Delete</h2>
                <p>Please confirm that you wish to delete the course entitled: <span className='emphasis-text'>"{course.title}"</span></p>
            </div>
        </main>
</main>
  )
};

export default Delete;