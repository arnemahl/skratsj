import React from 'react';
import { Section, Title, Content } from 'components/Section';
import TechTag from 'components/TechTag';

import { preferredLanguage } from 'util/localize';

const flatten = (arr, next) => arr.concat(next);
const unique = (item, index, array) => index === array.indexOf(item);

export default class Expertise extends React.Component {
  render() {
    const { expertise } = this.props.person;

    return (
      <Section>
        <Title>
          {{
            english: 'Expertise',
            norwegian: 'Ekspertise',
          }[preferredLanguage]}
        </Title>
        <Content>
          {expertise
            .map(area => area.technologies)
            .reduce(flatten, [])
            .filter(unique)
            .map(tech =>
              <TechTag solid key={tech}>{tech}</TechTag>
            )
          }
        </Content>
      </Section>
    );
  }
}
