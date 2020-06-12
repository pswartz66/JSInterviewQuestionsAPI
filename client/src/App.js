import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Docs from './components/Docs';
import Endpoints from './components/Endpoints';
import About from './components/About';
import Submit from './components/Submit';
import Navbar from './components/Navigation/Navbar';
import SidePane from './components/Navigation/SidePane';
import Overlay from './components/Overlay';

class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
    console.log(this.state);
  }

  closePaneHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    return (
      <div className="App">
          <div className="AppContainer">
            <Navbar drawerClickHandler={this.drawerToggler} />
            <SidePane 
              show={this.state.sideDrawerOpen}
              click={this.closePaneHandler}
            />
            {this.state.sideDrawerOpen ? (
              <Overlay click={this.closePaneHandler}/>
              ) :
              null
            }

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/docs" component={Docs} />
              <Route exact path="/endpoints" component={Endpoints} />
              <Route exact path="/about" component={About} />
              <Route exact path="/submit" component={Submit} />
            </Switch>
          </div>
      </div>
    );
  }
}
export default App;