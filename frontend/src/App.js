import React, { Component } from 'react';
import './App.css';
import './styles/Typography.css';
import './styles/Buttons.css';
import logo from './assets/logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppMobileMenu from './components/AppMobileMenu';
import Robots from './components/Robots';
import Results from './components/Results';

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
        <div class="App">
          <header class="App-header">
            <div class="logo">
              <img src={logo} alt="Robots!"/>
            </div>
            <div class="nav">
              <div class="hamburger" onClick={this.toggleNav}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </header>
          <Route exact path="/" component={Robots}/>
          <Route path="/results" component={Results}/>
          <AppMobileMenu show={this.state.showMobileNav} onClose={this.toggleNav}/>
        </div>
      </Router>
    );
  }
}

export default App;
