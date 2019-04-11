import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader active />
      </div>
    );
  }
}

export default App;
