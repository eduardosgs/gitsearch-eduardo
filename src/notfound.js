import React from 'react'
import './Home.css';
import { Dashboard } from './Dashboard';

export default props => {

  return (
  
      <React.Fragment>
          <div className="containerNotFound">
              <h1>Github <i>Search</i></h1>
              <Dashboard {...props} />
          </div>

          <div id="msgNotFound">
              User not found :(
          </div>
      </React.Fragment>
      
  )
}