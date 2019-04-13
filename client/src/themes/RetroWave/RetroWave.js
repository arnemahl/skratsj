import React from 'react';
import { css } from 'styled-components';
import { colors } from './colors';

const CSS = css`
  .theme-retro-wave {
    ${colors}
  }
`;

console.log(`CSS.join('')`, CSS.join('')); // DEBUG

export default function () {
  return (
    <style dangerouslySetInnerHTML={{ __html: CSS.join('') }} />
  );
}
