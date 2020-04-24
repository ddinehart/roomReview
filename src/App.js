import React from 'react';
import Nav from './components/Nav';
import '././App.css';
// import Survey from './Survey';
import Review from './components/Review';
import Login from './components/Login';
import Hotel from './components/Hotel'
import Home from './components/Home';
import StGInnSuites from './assets/StGInnSuites.jpg'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="nav">
        <Nav />
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/stginnsuites" component={() => <Hotel hotelName="St. George Inn and Suites" imageTitle={StGInnSuites}/>}/>
          <Route path="/login" component={Login}/>
          {/* <Route path="/surveys" component={Survey}/> */}
          <Route path="/reviews" component={Review}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
