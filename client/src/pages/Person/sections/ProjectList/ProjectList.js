import React from 'react';

import { List } from './ProjectList.styles.js';
import Project from './Project';

export default class ProjectList extends React.Component {

  render() {
    const { experience: projects } = this.props.person;

    return (
      <List>
        <h3>Prosjekter</h3>
        {projects.map(project =>
          <Project
            key={project._id}
            project={project}
          />
        )}
      </List>
    );
  }
}
