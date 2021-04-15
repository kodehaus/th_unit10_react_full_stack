import React, {useEffect, useContext, useState } from 'react';
import { ApplicationContext } from '../context'
import { useHistory } from "react-router-dom";

const  AddCourse = (props) => {  
    const { data, userIsLoggedIn } = useContext(ApplicationContext);
    let history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [estimatedTime, setEstimatedTime] = useState('');
    const [materialsNeeded, setMaterialsNeeded] = useState('');

    const handleCancel = () => {
        history.push(`/`)
    }


    const handleSubmit = async e => {
        e.preventDefault();
        let courseUpdateObj = {};
        courseUpdateObj['title'] = title
        courseUpdateObj['description'] = description
        courseUpdateObj['estimatedTime'] = estimatedTime
        courseUpdateObj['materialsNeeded'] = materialsNeeded
        courseUpdateObj['userId'] = userIsLoggedIn.id

        let response = await data.addCourse(courseUpdateObj, userIsLoggedIn);
        history.push(`/course-detail/${response.data.course[0].id}`)
    }

  return (
    <main>
    <div className='wrap'>
        <h2>Create Course</h2>
        <div className='validation--errors'>
            <h3>Validation Errors</h3>
            <ul>
                <li>Please provide a value for 'Title'</li>
                <li>Please provide a value for 'Description'</li>
            </ul>
        </div>
        <form
        onSubmit={handleSubmit} >
            <div className='main--flex'>
                <div>
                    <label htmlFor='courseTitle'>Course Title</label>
                    <input id='courseTitle' name='courseTitle' type='text' value={title} onChange={e => setTitle(e.target.value)}/>

                    <label htmlFor='courseAuthor'>Course Author</label>
                    <input id='courseAuthor' name='courseAuthor' type='text' value={`${userIsLoggedIn.firstName} ${userIsLoggedIn.lastName}`} readonly />

                    <label htmlFor='courseDescription'>Course Description</label>
                    <textarea id='courseDescription' name='courseDescription' value={description} onChange={e => setDescription(e.target.value)} ></textarea>
                </div>
                <div>
                    <label htmlFor='estimatedTime'>Estimated Time</label>
                    <input id='estimatedTime' name='estimatedTime' type='text' value={estimatedTime} onChange={e => setEstimatedTime(e.target.value)}/>

                    <label htmlFor='materialsNeeded'>Materials Needed</label>
                    <textarea id='materialsNeeded' name='materialsNeeded' value={materialsNeeded} onChange={e => setMaterialsNeeded(e.target.value)} ></textarea>
                </div>
            </div>
            <button className='button' type='submit'>Create Course</button>
            <button className='button button-secondary' onClick={handleCancel}>Cancel</button>
        </form>
    </div>
</main>
  )
};

export default AddCourse;