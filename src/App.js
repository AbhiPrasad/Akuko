import React, { Component } from 'react';

import Novel from './Novel/Novel';

import '../node_modules/@blueprintjs/core/dist/blueprint.css';
import '../node_modules/normalize.css/normalize.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        Akuko
        <Novel />
      </div>
    );
  }
}

export default App;
