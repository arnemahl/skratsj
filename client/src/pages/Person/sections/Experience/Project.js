import React from 'react';
import ProfessionalProject from './ProfessionalProject';
import PersonalProject from './PersonalProject';

export default (props) => {
  switch (props.project._type) {
    case 'professionalProject':
      return <ProfessionalProject {...props} />;
    case 'personalProject':
      return <PersonalProject {...props} />;
    default:
      return <div>TODO: Project types</div>;
  }
};
