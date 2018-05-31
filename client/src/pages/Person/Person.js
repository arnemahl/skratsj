import React, { Component } from 'react';
import IntroductoryOverview from './sections/IntroductoryOverview';
import KeyInformation from './sections/KeyInformation';
import Expertise from './sections/Expertise';
import Jobs from './sections/Jobs';
import ProfessionalProjects from './sections/ProfessionalProjects';
import PersonalProjects from './sections/PersonalProjects';
import Education from './sections/Education';
import VolunteerWork from './sections/VolunteerWork';

import { Page, LoadingMessage, ErrorMessage } from './Person.style.js';

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
          <LoadingMessage>
            Laster...
          </LoadingMessage>
        );
      case REQ.ERROR:
        return (
          <ErrorMessage>
            Noe gikk galt.<br />
            Prøv å laste siden på nytt.
          </ErrorMessage>
        );
      case REQ.SUCCESS:
        return (
          <Page>
            <IntroductoryOverview person={person} />
            <KeyInformation person={person} />
            <Expertise person={person} />
            <Education person={person} />
            <Jobs person={person} />
            <ProfessionalProjects person={person} />
            <PersonalProjects person={person} />
            <VolunteerWork person={person} />
          </Page>
        );
    }
  }
}

export default Person;
