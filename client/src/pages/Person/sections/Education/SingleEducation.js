import React from 'react';
import { Table, Nowrap } from './SingleEducation.style.js';

export default class SingleEducation extends React.Component {
  render() {
    const { singleEducation: edu } = this.props;

    return (
      <Table>
        <tbody>
          <tr>
            <td>
              <Nowrap>{edu.start}</Nowrap> - <Nowrap>{edu.end || 'nå'}</Nowrap>
            </td>
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
