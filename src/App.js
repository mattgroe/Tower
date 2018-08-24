import React, { Component } from 'react';

import Wrapper from './components/Wrapper.js';
import Header from './components/Header.js';

class App extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <Wrapper></Wrapper>
      </div>
    )
  }
}

export default App;
