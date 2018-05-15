import React from 'react';

import { Section, Title } from 'components/Section';
import Project from './Project';

export default class ProjectList extends React.Component {

  render() {
    const { experience: projects } = this.props.person;

    return (
      <Section>
        <Title>Erfaring</Title>
        {projects.map(project =>
          <Project
            key={project._id}
            project={project}
          />
        )}
      </Section>
    );
  }
}
