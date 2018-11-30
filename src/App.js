import React, { Component } from 'react';
import './App.css';
import WinnerMessage from './components/winnerMessage';
import Score from './components/score';
import Board from './components/board';
import Controls from './components/controls';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Score/>
        <WinnerMessage/>
        <Board />
        <Controls />
      </div>
    );
  }
}

export default App;
