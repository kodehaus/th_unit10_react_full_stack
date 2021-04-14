import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'

const  CourseDetail = (props) => {  
    const { data } = useContext(ApplicationContext);
    const [course, setCourse ]= useState({});
    const [owner, setOwner ]= useState({});
    let courseId = null;

    useEffect(() =>{
         courseId = props.match.params.id
        if(courseId){
           data.getCourse(courseId)
            .then(elems => {
                setCourse(elems.course);
                setOwner(elems.course.User)
            })
        }
      },[courseId])
    
  return (
    <main>
    <div className='actions--bar'>
        <div className='wrap'>
            <a className='button' href={`/update-course/${course.id}`}>Update Course</a>
            <a className='button' href='/delete-course'>Delete Course</a>
            <a className='button button-secondary' href='/'>Return to List</a>
        </div>
    </div>
    
    <div className='wrap'>
        <h2>Course Detail</h2>
        <form>
            <div className='main--flex'>
                <div>
                    <h3 className='course--detail--title'>Course</h3>
                    <h4 className='course--name'>{course.title} </h4>
                    <p>By {owner.firstName} {owner.lastName}</p>

                    {course.description}
                </div>
                <div>
                    <h3 className='course--detail--title'>Estimated Time</h3>
                    <p>{course.estimatedTime}</p>

                    <h3 className='course--detail--title'>Materials Needed</h3>
                    <ul className='course--detail--list'>
                    {course.materialsNeeded}
                    </ul>
                </div>
            </div>
        </form>
    </div>
</main>
  )
};

export default CourseDetail;




