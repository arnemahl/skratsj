import React, { Fragment } from 'react';
import Button from 'components/Button';
import {
  Section,
  FlexCol,
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
          <FlexCol>
            <ProfileImg src={createUrl(person.image).width(180).height(180)} alt="Person" sizePx="180" />
            <Button solid className="print-button" onClick={window.print}>Print / Lag PDF</Button>
          </FlexCol>
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
