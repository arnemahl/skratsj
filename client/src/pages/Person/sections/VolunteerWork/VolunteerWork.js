import React from 'react';
import { Section, Title, Content } from 'components/Section';
import VolunteerWorkPosition from './VolunteerWorkPosition';

export default class VolunteerWork extends React.Component {
  render() {
    const { volunteerWorkPositions } = this.props.person;

    if (!volunteerWorkPositions) {
      return false;
    }

    return (
      <Section>
        <Title>Frivillige verv</Title>
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
