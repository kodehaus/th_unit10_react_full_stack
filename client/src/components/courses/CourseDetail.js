import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import CourseDetailLinks from './CourseDetailLinks';
import ReactMarkdown from 'react-markdown'
import { Redirect } from 'react-router-dom';
import Header from '../Header';

const  CourseDetail = (props) => {  
    const { data, userIsLoggedIn} = useContext(ApplicationContext);
    const [course, setCourse ]= useState({});
    const [owner, setOwner ]= useState({});
    const [status, setStatus] = useState(0);
    let courseId = props.match.params.id;

    useEffect( () =>{
      (async function () {
        if(courseId){
          const response = await data.getCourse(courseId);
          setStatus(response.status);
          if(response.status >= 200 && response.status <= 299){
            setCourse(response.data.course);
            setOwner(response.data.course.User)
          }
        }
      })();
      },[courseId, data])
      
      if(status === 200){
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
      } else {
        return (
          <h1>hi</h1>
        )
      }
    
};

export default CourseDetail;




