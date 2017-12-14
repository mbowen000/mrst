import React, { Component } from 'react';
import './App.css';
import './styles/Typography.css';
import './styles/Buttons.css';
import logo from './assets/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// sub-components
import AppMobileMenu from './components/AppMobileMenu';
import RobotsList, { RobotsListAdmin, RobotsListResults } from './containers/RobotsList';
import Results from './components/Results';
import Register from './components/Register';
import Login from './components/Login';
import NavMenu from './components/NavMenu';

// redux
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';
import { fetchRobots } from './actions/index';
import { Provider } from 'react-redux';

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileNav: false
    }
    this.toggleNav = this.toggleNav.bind(this);
  }
  toggleNav() {
    this.setState(prevState => ({
      showMobileNav: !prevState.showMobileNav
    }))
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div className="App">
            <header className="App-header">
              <div className="logo">
                <img src={logo} alt="Robots!"/>
              </div>
              <div className="nav">
                <div className="nav-large">
                  <NavMenu/>
                </div>
                <div className="hamburger" onClick={this.toggleNav}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </header>
            <Route exact path="/" component={RobotsList}/>
            <Route path="/results" component={RobotsListResults}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/admin" component={RobotsListAdmin}/>
            <AppMobileMenu show={this.state.showMobileNav} onClose={this.toggleNav}/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
