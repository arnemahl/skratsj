import React from 'react';

import { Section, Title, NoPageBreak } from 'components/Section';
import ProfessionalProject from './ProfessionalProject';

import { preferredLanguage } from 'util/localize';

export default class ProfessionalProjects extends React.Component {

  render() {
    const { professionalProjects: projects } = this.props.person;

    return (
      <Section allowPageBreak>
        <NoPageBreak>
          <Title>
            {{
              english: 'Professional projects',
              norwegian: 'Jobbprosjekter',
            }[preferredLanguage]}
          </Title>
          {projects.slice(0, 1).map(project =>
            <ProfessionalProject
              key={project._id}
              project={project}
            />
          )}
        </NoPageBreak>
        {projects.slice(1).map(project =>
          <ProfessionalProject
            key={project._id}
            project={project}
          />
        )}
      </Section>
    );
  }
}
