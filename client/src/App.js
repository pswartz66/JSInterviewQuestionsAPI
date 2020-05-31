import React, { useState, useEffect } from 'react';
import './App.css';
import LeftNav from './components/LeftNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Root from './pages/Root';
import Documentation from './pages/Documentation';
import Endpoints from './pages/Endpoints';
import About from './pages/About';
import SubmitQuestion from './pages/SubmitQuestion';

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <div className="appContainer">
            <LeftNav />
            <Route exact path="/" component={Root} />
            <Route exact path="/documentation" component={Documentation} />
            <Route exact path="/endpoints" component={Endpoints} />
            <Route exact path="/about" component={About} />
            <Route exact path="/submit a question" component={SubmitQuestion} />
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
