import React, { Component } from 'react';
import Introduction from './pieces/Introduction';
import ProjectList from './pieces/ProjectList';

import { personStore, fetchPerson } from './personStore';

class Person extends Component {

  componentDidMount() {
    fetchPerson();
    personStore.addListener(this.onChange);
  }
  componentWillUnmount() {
    personStore.removeListener(this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  render() {
    const { person } = personStore.personAsync;

    return (
      <div>
        { person &&
          <Introduction person={person} />
        }
        <ProjectList />
      </div>
    );
  }
}

export default Person;
