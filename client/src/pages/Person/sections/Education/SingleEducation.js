import React from 'react';
import { Table } from 'components/Table';

import { format, nbLocale } from 'date-fns';
const fmt = date => format(date, 'YYYY', { locale: nbLocale });

export default class SingleEducation extends React.Component {
  render() {
    const { singleEducation: edu } = this.props;

    const start = fmt(edu.start);
    const end = edu.end ? fmt(edu.end) : 'nå';

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
