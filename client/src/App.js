import React,  {useEffect}  from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import './assets/reset.css';
import './assets/global.css';

import CourseListing from './components/courses/CourseListing';
import CourseDetail from './components/courses/CourseDetail';
import AddCourse from './components/courses/AddCourse';
import UpdateCourse from './components/courses/UpdateCourse';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import Header from './components/Header';
import NotFound from './components/404NotFound';
import Forbidden from './components/Forbidden';
import Error from './components/Error';




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
