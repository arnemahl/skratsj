import React, { Component } from 'react';
import IntroductoryOverview from './sections/IntroductoryOverview';
import ProjectList from './sections/ProjectList';

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
          <IntroductoryOverview person={person} />
        }
        <ProjectList />
      </div>
    );
  }
}

export default Person;
