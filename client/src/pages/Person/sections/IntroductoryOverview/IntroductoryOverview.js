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
import { preferredLanguage } from 'util/localize';

export default class IntroductoryOverview extends React.Component {

  render() {
    const { person } = this.props;

    return (
      <Fragment>
        <Section>
          <FlexCol>
            <ProfileImg src={createUrl(person.image).width(180).height(180)} alt="Person" sizePx="180" />
            <Button className="print-button" onClick={window.print}>
              {{
                english: 'Print / Create PDF',
                norwegian: 'Print / Lag PDF',
              }[preferredLanguage]}
            </Button>
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
