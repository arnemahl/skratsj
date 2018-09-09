import React from 'react';
import { Table, SmallBr } from 'components/Table';

import { startYear, endYear } from 'util/date/format';

export default class VolunteerWorkPosition extends React.Component {
  render() {
    const { position } = this.props;

    const start = startYear(position.start);
    const end = endYear(position.end);

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td>{start}</td>
              : <td>{start} - {end}</td>
            }
            <td>
              <h4>{position.title}</h4>
              <h5>{position.organizationName}</h5>
              {position.description && <SmallBr />}
              {position.description}
            </td>
          </tr>
        </tbody>
      </Table>
    );
  }
}
