import React from 'react';
import { Table, Nowrap } from 'components/Table';

import { preferredLanguage } from 'util/localize';
import { format, nbLocale } from 'date-fns';
const fmt = date => format(date, 'MM[.]YYYY', { locale: nbLocale });

export default class Job extends React.Component {
  render() {
    const { job } = this.props;

    const start = fmt(job.start);
    const end = job.end ? fmt(job.end) : 'nå';

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
