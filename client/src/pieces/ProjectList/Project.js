import React from 'react';
import { Table } from './Project.styles.js';

export default class Project extends React.Component {
  render() {
    const { project } = this.props;

    return (
      <Table>
        <tr>
          <td>
            {project.start} - {project.end}
          </td>
          <td>
            <h4>{project.title}</h4>
          </td>
        </tr>
      </Table>
    );
  }
}
