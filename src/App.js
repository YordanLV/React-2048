import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Board from './components/board';
import Controls from './components/controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Controls />
      </div>
    );
  }
}

export default App;
