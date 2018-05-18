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
          <ProfileImg src={createUrl(person.image).width(180).height(180)} alt="Person" sizePx="180" />
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
