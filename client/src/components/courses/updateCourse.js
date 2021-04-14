import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import { useHistory } from "react-router-dom";


const  UpdateCourse = (props) => {  
    const { data } = useContext(ApplicationContext);
    const [course, setCourse ]= useState({});
    const [owner, setOwner ]= useState({});
    let courseId = props.match.params.id;
    let history = useHistory();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [estimatedTime, setEstimatedTime] = useState();
    const [materialsNeeded, setMaterialsNeeded] = useState();
    
    const handleCancel = () => {
        history.push(`/course-detail/${courseId}`)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let courseUpdateObj = {};
        courseUpdateObj['title'] = title
        courseUpdateObj['description'] = description
        courseUpdateObj['estimatedTime'] = estimatedTime
        courseUpdateObj['materialsNeeded'] = materialsNeeded
        await data.updateCourse(courseUpdateObj, courseId);

      history.push(`/course-detail/${courseId}`)
    
      }
    useEffect(() =>{
        if(courseId){
           data.getCourse(courseId)
            .then(elems => {
                setTitle(elems.course.title);
                setDescription(elems.course.description);
                setEstimatedTime(elems.course.estimatedTime);
                setMaterialsNeeded(elems.course.materialsNeeded);
            })
        }
      },[courseId])
  return (
    <main>
    <div className='wrap'>
        <h2>Update Course</h2>
        <form onSubmit={handleSubmit}>
            <div className='main--flex'>
                <div>
                    <label for='courseTitle'>Course Title</label>
                    <input id='courseTitle' name='courseTitle' type='text' value={title} onChange={e => setTitle(e.target.value)} />

                    <label for='courseAuthor'>Course Author</label>
                    <input id='courseAuthor' name='courseAuthor' type='text' value='Bonnie'/>

                    <label for='courseDescription'>Course Description</label>
                    <textarea id='courseDescription' name='courseDescription' value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                </div>
                <div>
                    <label for='estimatedTime'>Estimated Time</label>
                    <input id='estimatedTime' name='estimatedTime' type='text' value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)} />

                    <label for='materialsNeeded'>Materials Needed</label>
                    <textarea id='materialsNeeded' name='materialsNeeded'  value={materialsNeeded} onChange={e => setMaterialsNeeded(e.target.value)} ></textarea>
                </div>
            </div>
            <button className='button' type='submit'>Update Course</button><button className='button button-secondary' onClick={handleCancel} >Cancel</button>
        </form>
    </div>
</main>
  )
  async function updateCourse  () {
      alert('hi')
      return null;
  }

  
};

export default UpdateCourse;