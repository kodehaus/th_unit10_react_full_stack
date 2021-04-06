import React,  {useEffect}  from 'react';

import logo from './logo.svg';
import './App.css';
const axios = require('axios').default;
const appUtils = require('./AppUtilities')


function App() {

  useEffect(() => {
    // Update the document title using the browser API
     searchPhotos('kitten');
  });
  const searchPhotos = (term) =>  {
    axios.get(`http://localhost:5000/api/courses`)
      .then( (response) => {
        // handle success
console.log(response)
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
