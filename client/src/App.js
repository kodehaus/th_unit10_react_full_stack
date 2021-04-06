import React,  {useEffect}  from 'react';

import './assets/reset.css';
import './assets/global.css';
import CourseContainer from './components/courseContainer';

const axios = require('axios').default;
const appUtils = require('./AppUtilities')


function App() {

  useEffect(() => {
    
  });


  return (
    <div id="root">
    <header>
        <div className="wrap header--flex">
            <h1 className="header--logo"><a href="index.html">Courses</a></h1>
            <nav>
                <ul className="header--signedout">
                    <li><a href="sign-up.html">Sign Up</a></li>
                    <li><a href="sign-in.html">Sign In</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main>
            <CourseContainer />
    </main>
    </div>
  );
}

export default App;
