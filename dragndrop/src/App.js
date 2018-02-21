import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Board from './board';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board knightPosition={[0,0]} />
      </div>
    );
  }
}

export default App;
