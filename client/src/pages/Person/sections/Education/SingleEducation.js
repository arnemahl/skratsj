import React from 'react';
import { Table } from 'components/Table';

import { startYear, endYear } from 'util/date/format';

export default class SingleEducation extends React.Component {
  render() {
    const { singleEducation: edu } = this.props;

    const start = startYear(edu.start);
    const end = endYear(edu.end);

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td>{start}</td>
              : <td>{start} - {end}</td>
            }
            <td>
              <h4>{edu.degree}</h4>
              <h5>{edu.institutionName}</h5>
              {edu.description}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
