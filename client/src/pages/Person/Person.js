import React, { Component } from 'react';
import IntroductoryOverview from './sections/IntroductoryOverview';
import KeyInformation from './sections/KeyInformation';
import ProjectList from './sections/ProjectList';

import { Page } from './Person.style.js';

import { personStore, fetchPerson } from './personStore';
import REQ from 'util/REQ';

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
    const { person, req } = personStore.personAsync;

    switch (req) { // eslint-disable-line default-case
      case REQ.INIT:
      case REQ.PENDING:
        return (
          <Page>
            Laster...
          </Page>
        );
      case REQ.ERROR:
        return (
          <Page>
            Noe gikk galt.<br />
            Prøv å laste siden på nytt.
          </Page>
        );
      case REQ.SUCCESS:
        return (
          <Page>
            <IntroductoryOverview person={person} />
            <KeyInformation />
            {/*<ProjectList />*/}
          </Page>
        );
    }
  }
}

export default Person;
