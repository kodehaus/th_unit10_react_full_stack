import React from 'react';

const  Course = (props) => {  
  return (
      <a className='course--module course--link' href={props.url}>
      <h2 className='course--label'>{props.label}</h2>
      <h3 className='course--title'>{props.title}</h3>
      </a> 
  )
};

export default Course;