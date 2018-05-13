import React, { Fragment } from 'react';
import {
  Section,
  ProfileImg,
  Description,
  Name,
  Title,
  Introduction,
} from './IntroductoryOverview.style.js';

import { createUrl } from 'sanity';

export default class IntroductoryOverview extends React.Component {

  render() {
    const { person } = this.props;

    return (
      <Fragment>
        <Section>
          <ProfileImg src={createUrl(person.image).width(200).height(200)} alt="Person" size="200" />
          <Description>
            <Name>{person.name}</Name>
            <Title>{person.title}</Title>
            <Introduction>{person.introduction}</Introduction>
          </Description>
        </Section>
      </Fragment>
    );
  }
}
