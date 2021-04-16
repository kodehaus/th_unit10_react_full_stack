import React, {useEffect, useContext, useState } from 'react';
import Course from './Course';
import { ApplicationContext } from '../context'
import App from '../../App';

export default function CourseListing() {  
  const { data } = useContext(ApplicationContext);
  const [courses, setCourses] = useState([]);
  


  useEffect(() =>{
    data.getCourses()
    .then(elems => {
      setCourses(elems);
    })
  },[])

  return (
    <main>
     <div className="wrap main--grid">
      {
        courses.map(item => {
          return <Course key={item.id} title={item.title} url={`courses/${item.id}`} label='Course'/>
        })
      }


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
