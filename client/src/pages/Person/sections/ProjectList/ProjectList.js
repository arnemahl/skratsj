import React from 'react';
import { projectListStore, fetchProjects } from './projectListStore';

import { List } from './ProjectList.styles.js';
import Project from './Project';

export default class ProjectList extends React.Component {

  componentDidMount() {
    fetchProjects();
    projectListStore.addListener(this.onChange);
  }
  componentWillUnmount() {
    projectListStore.removeListener(this.onChange);
  }
  onChange = () => {
    this.forceUpdate();
  }

  render() {
    const { projects = [] } = projectListStore.projectsAsync;

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
