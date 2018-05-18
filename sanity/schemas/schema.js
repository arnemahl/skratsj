import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import person from './person';
import personalProject from './personalProject';
import professionalProject from './professionalProject';
import company from './company';
import education from './education';
import volunteerWorkPosition from './volunteerWorkPosition';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
      person,
      professionalProject,
      personalProject,
      company,
      education,
      volunteerWorkPosition,
    ])
})
