import React, { Fragment } from 'react';
import { Table, Nowrap } from 'components/Table';
import TechTag from 'components/TechTag';

import { format, nbLocale } from 'date-fns';
const fmt = date => format(date, 'MM[.]YYYY', { locale: nbLocale });

export default class Project extends React.Component {
  render() {
    const { project } = this.props;

    const start = fmt(project.start);
    const end = project.end ? fmt(project.end) : 'nå';

    return (
      <Table>
        <tbody>
          <tr>
            { start === end
              ? <td><Nowrap>{start}</Nowrap></td>
              : <td><Nowrap>{start}</Nowrap> - <Nowrap>{end}</Nowrap></td>
            }
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
