import React,  {useEffect}  from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import './assets/reset.css';
import './assets/global.css';
import CourseListing from './components/courses/courseListing';
import CourseDetail from './components/courses/courseDetail';
import AddCourse from './components/courses/addCourse';
import UpdateCourse from './components/courses/updateCourse';
import SignUp from './components/authentication/signUp';
import SignIn from './components/authentication/signIn';
import Header from './components/header';
import NotFound from './components/404NotFound';
import Forbidden from './components/forbidden';
import Error from './components/error';


const axios = require('axios').default;
const appUtils = require('./AppUtilities')


function App() {

  useEffect(() => {
    
  });


  return (
    <BrowserRouter>
    <div id="root">
      <Header />
      <Switch>
        <Route exact path='/' component={CourseListing} />
        <Route exact path='/course-detail' component={CourseDetail} />
        <Route exact path='/course-add' component={AddCourse} />
        <Route exact path='/course-update' component={UpdateCourse} />
        <Route exact path='/sign-up' component={SignUp} />
        <Route exact path='/sign-in' component={SignIn} />
        <Route exact path='/forbidden' component={Forbidden} />
        <Route component={NotFound} />
        
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
