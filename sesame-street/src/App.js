import React, { Component } from 'react';

import Character from './Character.js'
import Header from './Header.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Character />
      </div>
    );
  }
}

export default App;
