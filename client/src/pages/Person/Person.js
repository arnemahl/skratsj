import React, { Component } from 'react';
import Introduction from './pieces/Introduction';
import ProjectList from './pieces/ProjectList';

class Person extends Component {
  render() {
    return (
      <div>
        <Introduction />
        <ProjectList />
      </div>
    );
  }
}

export default Person;
