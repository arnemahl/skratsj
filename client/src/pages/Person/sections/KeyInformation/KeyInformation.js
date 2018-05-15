import React from 'react';
import {
  Section,
  Entry,
  Icon,
} from './KeyInformation.style.js';

export default class KeyInformation extends React.Component {
  render() {
    const { keyInfo: info } = this.props.person;

    return (
      <Section>
        { info.emailAddress &&
          <Entry>
            <Icon className="fas fa-envelope" />
            &nbsp;{info.emailAddress}
          </Entry>
        }
        { info.phoneNumber &&
          <Entry>
            <Icon className="fas fa-mobile-alt" />
            &nbsp;{info.phoneNumber}
          </Entry>
        }
        { info.location &&
          <Entry>
            <Icon className="fas fa-map-marker-alt" />
            &nbsp;{info.location}
          </Entry>
        }
        { info.websiteUrl &&
          <Entry>
            <Icon className="fas fa-globe" />
            &nbsp;<a href={info.websiteUrl}>{info.websiteUrl.replace('https://', '')}</a>
          </Entry>
        }
        { info.linkedInUrl &&
          <Entry>
            <Icon className="fab fa-linkedin-in" />
            &nbsp;<a href={info.linkedInUrl}>{info.linkedInUrl.replace('https://', '')}</a>
          </Entry>
        }
        { info.twitterHandle &&
          <Entry>
            <Icon className="fab fa-twitter" />
            &nbsp;{info.twitterHandle}
          </Entry>
        }
        { info.birthYear &&
          <Entry>
            <Icon className="fas fa-birthday-cake" />
            &nbsp;{info.birthYear}
          </Entry>
        }
      </Section>
    );
  }
}