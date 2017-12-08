import React, { Component } from 'react';
import './App.css';
import './styles/Typography.css';
import './styles/Buttons.css';
import logo from './assets/logo.svg';
import robotPlaceholder from './assets/robot-placeholder.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="logo">
            <img src={logo} alt="Robots!"/>
          </div>
          <div class="nav">
            <div class="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
        <section class="robots">
          <div class="robot">
            <img src={robotPlaceholder} alt="Robot Name"/>
            <h3>Robot Name</h3>
            <button class="button primary">Vote</button>
          </div>
          <div class="robot">
            <img src={robotPlaceholder} alt="Robot Name"/>
            <h3>Robot Name</h3>
            <button class="button primary" disabled="disabled">Vote</button>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
