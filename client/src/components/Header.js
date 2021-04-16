import React, { useContext } from 'react';
import { ApplicationContext } from './context'
import HeaderLinks from './HeaderLinks';

const  Header = (props) => {  
  const { userIsLoggedIn} = useContext(ApplicationContext);
  return (
    <header>
        <div className="wrap header--flex">
            <h1 className="header--logo"><a href="/">Courses</a></h1>
            <nav>
              <ul className="header--signedout">
                <HeaderLinks isLoggedIn={userIsLoggedIn}/>
              </ul>
            </nav>
        </div>
    </header>
  )
};

export default Header;