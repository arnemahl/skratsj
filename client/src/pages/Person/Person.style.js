import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #1d1415;
  --main-color: #2d6558;
  --white: #e5e5e5;

  padding: 33px 0;
`;

const Paper = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 25px;
  background-color: var(--white);
  color: #1e1e1e;
`;

export const Page = (props) => (
  <Background>
    <Paper {...props} />
  </Background>
);
