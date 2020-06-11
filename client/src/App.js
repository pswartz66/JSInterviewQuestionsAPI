import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Docs from './components/Docs';
import Endpoints from './components/Endpoints';
import About from './components/About';
import Submit from './components/Submit';
import Navbar from './components/Navigation/Navbar';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="AppContainer">
            <Navbar drawerClickHandler={this.drawerToggler} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/docs" component={Docs} />
              <Route exact path="/endpoints" component={Endpoints} />
              <Route exact path="/about" component={About} />
              <Route exact path="/submit" component={Submit} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
