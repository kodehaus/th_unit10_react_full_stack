import React from 'react';

const  ErrorDetail = (props) => {  
  let keyId = 1;
  if(props.errors.length > 0){
    return (
      <div className='validation--errors'>
          <h3>{props.title}</h3>
          <ul>
            {props.errors.map(item => <li key={keyId++}>{item.message}</li>)}
          </ul>
      </div>
    )
  }  else {
    return (
      <>
      </>
    )
  }
};


export default ErrorDetail;


