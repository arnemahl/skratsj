import React from 'react';

import { Section, Title, NoPageBreak } from 'components/Section';
import Project from './Project';

export default class Experience extends React.Component {

  render() {
    const { experience: projects } = this.props.person;

    return (
      <Section allowPageBreak>
        <NoPageBreak>
          <Title>Erfaring</Title>
          {projects.slice(0, 1).map(project =>
            <Project
              key={project._id}
              project={project}
            />
          )}
        </NoPageBreak>
        {projects.slice(1).map(project =>
          <Project
            key={project._id}
            project={project}
          />
        )}
      </Section>
    );
  }
}
