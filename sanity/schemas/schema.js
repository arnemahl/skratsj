import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import project from './project';
import company from './company';

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([project, company])
})
