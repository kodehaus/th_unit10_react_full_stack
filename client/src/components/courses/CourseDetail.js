import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import CourseDetailLinks from './CourseDetailLinks';
import ReactMarkdown from 'react-markdown'
import { useHistory } from "react-router-dom";

const  CourseDetail = (props) => {  
    const { data, userIsLoggedIn} = useContext(ApplicationContext);
    const [course, setCourse ]= useState({});
    const [owner, setOwner ]= useState({});
    let courseId = props.match.params.id;
    let history = useHistory();

    useEffect( () =>{
      (async function () {
        if(courseId){
          let status = 0;
          // const response = await data.getCourse(courseId);
          await data.getCourse(courseId)
          .then((response) => {
            status = response.status
            setCourse(response.data.course);
            setOwner(response.data.course.User)
          })
          .catch((error) => {
            status = error.response.status
            console.dir(error.response.status)
          })
          .then((response) => {
             if(status === 404){
              history.push(`/404/Not/Found`)
            } else if(status >= 405){
              history.push(`/error`)
            }
          });
        }
      })();
      },[courseId, data, history])
      
            return (
              <main>
              <div className='actions--bar'>
                  <div className='wrap'>
                    <CourseDetailLinks courseId={courseId} ownerId={owner.id} user={userIsLoggedIn} />
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
                              <ReactMarkdown>
                                {course.description}
                              </ReactMarkdown>
                              
                          </div>
                          <div>
                              <h3 className='course--detail--title'>Estimated Time</h3>
                              <p>{course.estimatedTime}</p>
          
                              <h3 className='course--detail--title'>Materials Needed</h3>
                              <ul className='course--detail--list'>
                              <ReactMarkdown>
                                {course.materialsNeeded}
                              </ReactMarkdown>
                              </ul>
                          </div>
                      </div>
                  </form>
              </div>
          </main>
            )
    
};

export default CourseDetail;




