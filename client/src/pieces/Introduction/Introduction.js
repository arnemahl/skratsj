import React, { Fragment } from 'react';
import { FlexBox } from './Introduction.style.js';

import { createUrl } from '../../sanity.js';

export default class Introduction extends React.Component {

  render() {
    const { person } = this.props;

    return (
      <Fragment>
        <FlexBox>
          <img src={createUrl(person.image)} />
        </FlexBox>
      </Fragment>
    );
  }
}
