import React from 'react';

import { Section, Title, NoPageBreak } from 'components/Section';
import PersonalProject from './PersonalProject';

export default class PersonalProjects extends React.Component {

  render() {
    const { personalProjects: projects } = this.props.person;

    return (
      <Section allowPageBreak>
        <NoPageBreak>
          <Title>Personlige prosjekter</Title>
          {projects.slice(0, 1).map(project =>
            <PersonalProject
              key={project._id}
              project={project}
            />
          )}
        </NoPageBreak>
        {projects.slice(1).map(project =>
          <PersonalProject
            key={project._id}
            project={project}
          />
        )}
      </Section>
    );
  }
}
