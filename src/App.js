import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Notfound from './notfound';

export default props => {
  
  return (

    <div className="App">
      <header className="App-header"> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/result" component={Home} />
          <Route path="/notfound" component={Notfound} />
        </Switch>
      </header>
    </div>

  )
}