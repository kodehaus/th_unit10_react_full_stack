import React, {useEffect } from 'react';
import Course from './Course';

export default function CourseListing() {  
  useEffect(() =>{
    
  })
  return (
    <main>
     <div className="wrap main--grid">
      <Course title='Build a Basic Bookcase' url='course-detail' label='Course A'/>
      <Course title='Learn How to Program' url='course-detail' label='Course B'/>
      <Course title='Learn Hot to Test Programs' url='course-detail' label='Course C'/>

    <a className="course--module course--add--module" href="/course-add">
        <span className="course--add--title">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
            New Course
        </span>
    </a>
</div>
    </main>
  )
};
