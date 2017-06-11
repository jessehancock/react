import React, { Component } from 'react';
import logo from './img/Sesame_Street.png';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to Sesame Street</h2>
        </div>
        <p>Which character would you like to learn about?</p>
      </div>
    );
  }
}

export default Header;
