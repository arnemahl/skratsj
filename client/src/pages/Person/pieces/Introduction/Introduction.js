import React, { Fragment } from 'react';
import { FlexBox } from './Introduction.style.js';

import { createUrl } from 'sanity';

export default class Introduction extends React.Component {

  render() {
    const { person } = this.props;

    return (
      <Fragment>
        <FlexBox>
          <img src={createUrl(person.image)} alt="Person" />
        </FlexBox>
      </Fragment>
    );
  }
}
