import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import { useHistory } from "react-router-dom";
import ErrorDetail from '../ErrorDetail';


const  UpdateCourse = (props) => {  
    const { data, userIsLoggedIn } = useContext(ApplicationContext);
    const [owner, setOwner ]= useState({});
    let courseId = props.match.params.id;
    let history = useHistory();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');
    const [errors, setErrors] = useState([]);
    
    const handleCancel = () => {
        history.push(`/courses/${courseId}`)
    }

    const handleSubmit = async e => {
        e.preventDefault();
        let courseUpdateObj = {};
        courseUpdateObj['title'] = title
        courseUpdateObj['description'] = description
        courseUpdateObj['estimatedTime'] = estimatedTime
        courseUpdateObj['materialsNeeded'] = materialsNeeded
        let response = await data.updateCourse(courseUpdateObj, courseId, userIsLoggedIn);
        if(response.status >= 200 && response.status <=299){
            history.push(`/courses/${courseId}`)
        } else if(response.status > 299){
            setErrors(response.data.error)
        }


//     
    
      }
    useEffect(() =>{
        if(courseId){
           data.getCourse(courseId)
            .then(elems => {
                setTitle(elems.course.title);
                setDescription(elems.course.description);
                setEstimatedTime(elems.course.estimatedTime);
                setMaterialsNeeded(elems.course.materialsNeeded);
                setOwner(elems.course.User)
            })
        }
      },[courseId, data])
  return (
    <main>
    <div className='wrap'>
        <h2>Update Course</h2>
            <ErrorDetail title='Validation Errors' errors={errors} />
        <form onSubmit={handleSubmit}>
            <div className='main--flex'>
                <div>
                    <label htmlFor='courseTitle'>Course Title</label>
                    <input id='courseTitle' name='courseTitle' type='text' value={title} onChange={e => setTitle(e.target.value)} />

                    <label htmlFor='courseAuthor'>Course Author</label>
                    <input id='courseAuthor' name='courseAuthor' type='text' value={`${owner.firstName} ${owner.lastName}`} readOnly/>

                    <label htmlFor='courseDescription'>Course Description</label>
                    <textarea id='courseDescription' name='courseDescription' value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor='estimatedTime'>Estimated Time</label>
                    <input id='estimatedTime' name='estimatedTime' type='text' value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)} />

                    <label htmlFor='materialsNeeded'>Materials Needed</label>
                    <textarea id='materialsNeeded' name='materialsNeeded'  value={materialsNeeded} onChange={e => setMaterialsNeeded(e.target.value)} ></textarea>
                </div>
            </div>
            <button className='button' type='submit'>Update Course</button><button className='button button-secondary' onClick={handleCancel} >Cancel</button>
        </form>
    </div>
</main>
  )
  
};

export default UpdateCourse;
