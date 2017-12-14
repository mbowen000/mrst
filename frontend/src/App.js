import React, { Component } from 'react';
import './App.css';
import './styles/Typography.css';
import './styles/Buttons.css';
import logo from './assets/logo.svg';

// routing
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';

// sub-components
import AppMobileMenu from './components/AppMobileMenu';
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

// Toasts
import { ToastContainer } from 'react-toastify';

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
          <ToastContainer/>
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

            <Route component={EnsureLoggedInContainer}/>

            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <AppMobileMenu show={this.state.showMobileNav} onClose={this.toggleNav}/>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
