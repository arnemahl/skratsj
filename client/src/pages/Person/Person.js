import React, { Component } from 'react';
import Theme from 'themes/Theme';
import LanguageSelector from './LanguageSelector';
import IntroductoryOverview from './sections/IntroductoryOverview';
import KeyInformation from './sections/KeyInformation';
import Expertise from './sections/Expertise';
import Jobs from './sections/Jobs';
import ProfessionalProjects from './sections/ProfessionalProjects';
import PersonalProjects from './sections/PersonalProjects';
import Education from './sections/Education';
import VolunteerWork from './sections/VolunteerWork';

import './colors.css';
import { Page } from './Person.style.js';
import { LoadingMessageLocalized, ErrorMessageLocalized } from './RequestStateFeedback';

import { personStore, fetchPerson } from './personStore';
import REQ from 'util/REQ';

class Person extends Component {

  state = {
    theme: "default",
  }

  toggleTheme() {
    this.setState(state => {
      // eslint-disable-next-line default-case
      switch (state.theme) {
        case "default":
          return { theme: "retro-wave" };
        case "retro-wave":
          return { theme: "default" };
      }
    })
  }

  easterEgg = {
    t0: 0,
    clicks: 0,
  }
  countClicks = () => {
    const { t0 } = this.easterEgg;

    if (Date.now() - t0 > 1000) {
      this.easterEgg = {
        t0: Date.now(),
        clicks: 1,
      };
    } else {
      this.easterEgg.clicks++;
    }

    if (this.easterEgg.clicks === 3) {
      this.toggleTheme();
    }
  }

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
        return <LoadingMessageLocalized />;
      case REQ.ERROR:
        return <ErrorMessageLocalized />;
      case REQ.SUCCESS:
        return (
          <Page theme={this.state.theme} onClick={this.countClicks}>
            <Theme theme={this.state.theme} />
            <LanguageSelector />
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
