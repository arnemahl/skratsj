import React, { Fragment } from 'react';
import { Table, Nowrap } from './Project.styles.js';
import TechTag from 'components/TechTag';

export default class Project extends React.Component {
  render() {
    const { project } = this.props;

    console.debug(`project.technologies`, project.technologies); // DEBUG

    return (
      <Table>
        <tbody>
          <tr>
            <td>
              <Nowrap>{project.start}</Nowrap> - <Nowrap>{project.end || 'nå'}</Nowrap>
            </td>
            <td>
              <h4>{project.title}</h4>
              {project.company && <h5>for {project.company.name}</h5>}
            </td>
          </tr>

          { project.description &&
            <tr>
              <td>
                Prosjektbeskrivelse
              </td>
              <td dangerouslySetInnerHTML={{__html: project.description.split('\n').join('<br />')}} />
            </tr>
          }

          { (project.role && project.role.title && project.role.description) &&
            <Fragment>
              <tr>
                <td>
                  Rolle
                </td>
                <td>
                  {project.role.title}
                </td>
              </tr>

              <tr>
                <td>
                </td>
                <td dangerouslySetInnerHTML={{__html: project.role.description.split('\n').join('<br />')}} />
              </tr>

              <tr>
                <td>
                  Teknologier
                </td>
                <td>
                  {project.role.technologies.map(tech =>
                    <TechTag key={tech}>{tech}</TechTag>
                  )}
                </td>
              </tr>
            </Fragment>
          }
        </tbody>
      </Table>
    );
  }
}
