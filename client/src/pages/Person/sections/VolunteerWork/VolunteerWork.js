import React from 'react';
import { Section, Title, Content } from 'components/Section';
import VolunteerWorkPosition from './VolunteerWorkPosition';

import { preferredLanguage } from 'util/localize';

export default class VolunteerWork extends React.Component {
  render() {
    const { volunteerWorkPositions } = this.props.person;

    if (!volunteerWorkPositions) {
      return false;
    }

    return (
      <Section>
        <Title>
          {{
            english: 'Volunteer work',
            norwegian: 'Frivillige verv',
          }[preferredLanguage]}
        </Title>
        <Content>
          {volunteerWorkPositions.map(position =>
            <VolunteerWorkPosition
              key={position._id}
              position={position}
            />
          )}
        </Content>
      </Section>
    );
  }
}
