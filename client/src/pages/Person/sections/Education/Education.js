import React from 'react';
import { Section, Title, Content } from 'components/Section';
import SingleEducation from './SingleEducation';

export default class Education extends React.Component {
  render() {
    const { education = [] } = this.props.person;

    return (
      <Section>
        <Title>Utdannelse</Title>
        <Content>
          {education.map(singleEducation =>
            <SingleEducation
              key={singleEducation._id}
              singleEducation={singleEducation}
            />
          )}
        </Content>
      </Section>
    );
  }
}
