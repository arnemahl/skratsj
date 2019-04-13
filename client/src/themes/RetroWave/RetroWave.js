import React from 'react';
import { css } from 'styled-components';
import { colors } from './colors';
import TechTag from 'components/TechTag/TechTag'

const CSS = css`
  .theme-retro-wave {
    ${colors}

    ${TechTag} {
      border-radius: 0;
    }
  }
`;

console.log(`CSS.join('')`, CSS.join('')); // DEBUG

export default function () {
  return (
    <style dangerouslySetInnerHTML={{ __html: CSS.join('') }} />
  );
}
