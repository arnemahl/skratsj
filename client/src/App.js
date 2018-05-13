import React, { Component } from 'react';
import Introduction from './pieces/Introduction';
import ProjectList from './pieces/ProjectList';

class App extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <ProjectList />
      </div>
    );
  }
}

export default App;
