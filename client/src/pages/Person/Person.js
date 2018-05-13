import React, { Component } from 'react';
import IntroductoryOverview from './sections/IntroductoryOverview';
import ProjectList from './sections/ProjectList';

import { Page } from './Person.style.js';

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
      <Page>
        { person &&
          <IntroductoryOverview person={person} />
        }
        <ProjectList />
      </Page>
    );
  }
}

export default Person;
