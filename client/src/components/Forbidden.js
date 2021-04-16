import React from 'react';

const  Forbidden = (props) => {  
  return (
        <main>
          <div className='actions--bar'>
              <div className='wrap'>
                <a className='button button-secondary' href='/'>Return to List</a>
              </div>
          </div>
            <div className='wrap'>
                <h2>Forbidden</h2>
                <p>Oh oh! You can't access this page.</p>
            </div>
        </main>
  )
};

export default Forbidden;