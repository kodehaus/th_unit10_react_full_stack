import React, { useState, useEffect } from 'react';
import Data from '../data'
export const ApplicationContext = React.createContext()

export const Provider = (props) => {
  const [test, setTest] = useState('this is the thing');
  const [data, setData] = useState(new Data())
useEffect(() => {
},[])

  return (
    <ApplicationContext.Provider value={{ 
      test: test,
      pepto: 'bizmal',
      data
    }}>
      { props.children }
    </ApplicationContext.Provider>
  );
};