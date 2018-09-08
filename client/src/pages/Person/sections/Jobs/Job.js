import React from 'react';
import { Table, Nowrap } from 'components/Table';

import { preferredLanguage } from 'util/localize';
import { startMonth, endMonth } from 'util/date/format';

export default class Job extends React.Component {
  render() {
    const { job } = this.props;

    const start = startMonth(job.start);
    const end = endMonth(job.end);

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td><Nowrap>{start}</Nowrap></td>
              : <td><Nowrap>{start}</Nowrap> - <Nowrap>{end}</Nowrap></td>
            }
            <td>
              <h4>{job.company.name}</h4>
              <h5>{job.title}</h5>
            </td>
          </tr>

          { job.description &&
            <tr>
              <td>
                {{
                  english: 'Description',
                  norwegian: 'Beskrivelse',
                }[preferredLanguage]}
              </td>
              <td>
                {job.description}
              </td>
            </tr>
          }
        </tbody>
      </Table>
    );
  }
}
