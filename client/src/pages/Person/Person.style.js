import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #1d1415;
  --main-color: #2d6558;
  --main-color-light: #659086;
  --white: #e5e5e5;
  --black: #1e1e1e;

  @media (min-width: 1000px) {
    padding: 3.3rem 10rem;
  }
  @media print {
    background-color: unset;
  }
`;

const Paper = styled.div`
  @media (min-width: 1000px) {
    max-width: 80rem;
  }

  margin: auto;
  padding-bottom: 2.5rem;
  background-color: var(--white);
  color: var(--black);

  @media print {
    background-color: unset;
  }
`;

export const Page = (props) => (
  <Background>
    <Paper {...props} />
  </Background>
);
