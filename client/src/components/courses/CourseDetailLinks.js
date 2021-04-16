import React from 'react';

const  CourseDetailLinks = (props) => {  

    if(props.user && (props.ownerId === props.user.id)){
      return (
        <>
                <a className='button' href={`/courses/${props.courseId}/update`}>Update Course</a>
                <a className='button' href={`/courses/${props.courseId}/delete`}>Delete Course</a>
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




