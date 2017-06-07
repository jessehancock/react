import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Hello and welcome to the Solar System</h2>
        </div>
        <p className="App-intro">
          There are eight planents and you should learn about each one.
        </p>
        <img src={this.props.source} />
      </div>
    );
  }
}

export default App;
