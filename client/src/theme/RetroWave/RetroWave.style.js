import styled from 'styled-components';

import TechTag from 'components/TechTag/TechTag';
import Button from 'components/Button/Button';
import {
  ProfileImg,
  Name,
} from 'pages/Person/sections/IntroductoryOverview/IntroductoryOverview.style.js';

export const RetroWave = styled.div`
  ${TechTag}, ${Button} {
    border-radius: 0 !important;
  }
  @media not print {
    ${ProfileImg} {
      clip-path: polygon(0% 100%, 100% 88%, 70% 0%, 20% 14%);
      filter: saturate(140%) hue-rotate(64deg);
    }

    ${Name} {
      color: #fdb8f7;
      font-family: 'Mrs Saint Delafield', cursive;
      font-size: 5rem;
      margin-bottom: -3rem;
    }
  }
`;
