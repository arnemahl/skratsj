import React from 'react';
import { Table } from 'components/Table';

import { format, nbLocale } from 'date-fns';
const fmt = date => format(date, 'YYYY', { locale: nbLocale });

export default class VolunteerWorkPosition extends React.Component {
  render() {
    const { position } = this.props;

    const start = fmt(position.start);
    const end = position.end ? fmt(position.end) : 'nå';

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td>{start}</td>
              : <td>{start} - {end}</td>
            }
            <td>
              <h4>{position.position}</h4>
              <h5>{position.organizationName}</h5>
            </td>
          </tr>
          <tr>
            <td />
            <td>
              {position.description}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
