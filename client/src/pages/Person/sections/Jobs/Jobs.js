import React from 'react';

import { Section, Title, NoPageBreak } from 'components/Section';
import Job from './Job';

import { preferredLanguage } from 'util/localize';

export default class Experience extends React.Component {

  render() {
    const { jobs } = this.props.person;

    return (
      <Section allowPageBreak>
        <NoPageBreak>
          <Title>
            {{
              english: 'Experience',
              norwegian: 'Erfaring',
            }[preferredLanguage]}
          </Title>
          {jobs.slice(0, 1).map(job =>
            <Job
              key={job._id}
              job={job}
            />
          )}
        </NoPageBreak>
        {jobs.slice(1).map(job =>
          <Job
            key={job._id}
            job={job}
          />
        )}
      </Section>
    );
  }
}
