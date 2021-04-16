import React,  {useEffect}  from 'react';
import {
  BrowserRouter, Route, Switch
} from 'react-router-dom';

import './assets/reset.css';
import './assets/global.css';

import Courses from './components/courses/Courses';
import CourseDetail from './components/courses/CourseDetail';
import AddCourse from './components/courses/AddCourse';
import UpdateCourse from './components/courses/UpdateCourse';
import DeleteCourse from './components/courses/DeleteCourse';
import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn';
import SignOut from './components/authentication/SignOut';
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
        <Route exact path='/' component={Courses} />
        <Route exact path='/courses/:id' component={CourseDetail} />
        <Route exact path='/course-add' component={AddCourse} />
        <Route exact path='/courses/:id/update' component={UpdateCourse} />
        <Route exact path='/courses/:id/delete' component={DeleteCourse} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signout' component={SignOut} />
        <Route exact path='/forbidden' component={Forbidden} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
