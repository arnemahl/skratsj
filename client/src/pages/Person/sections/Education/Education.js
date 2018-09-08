import React from 'react';
import { Section, Title, Content } from 'components/Section';
import SingleEducation from './SingleEducation';

import { preferredLanguage } from 'util/localize';

export default class Education extends React.Component {
  render() {
    const { education = [] } = this.props.person;

    return (
      <Section>
        <Title>
          {{
            english: 'Education',
            norwegian: 'Utdannelse',
          }[preferredLanguage]}
        </Title>
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
