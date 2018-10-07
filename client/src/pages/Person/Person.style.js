import React from 'react';
import styled, { keyframes } from 'styled-components';

const Background = styled.div`
  background-color: #1d1415;
  --main-color: #2d6558;
  --main-color-light: #659086;
  --white: #e5e5e5;
  --black: #1e1e1e;

  min-height: 100vh;

  @media (min-width: 1000px) {
    padding: 3.3rem 10rem;
  }
  @media print {
    background-color: unset;
    min-height: unset;
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

  min-height: 80vh;
  @media (max-width: 999px) {
    min-height: 100vh;
  }

  @media print {
    background-color: unset;
  }
`;

export const Page = (props) => (
  <Background>
    <Paper {...props} />
  </Background>
);

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FeedbackText = styled.div`
  font-size: 24px;
  padding: 5rem 2rem;
  line-height: 1.4;
  text-align: center;

  animation-name: ${fadeIn};
  animation-delay: ${props => props.delay};
  animation-duration: 1s;
  animation-fill-mode: both;
  ${p => p.pulsate ? `
    animation-iteration-count: infinite;
    animation-direction: alternate;
  ` : ''}

  a {
    color: var(--main-color);
  }
`;

export const LoadingMessage = (props) => (
  <Background>
    <Paper>
      <FeedbackText delay="200ms" pulsate={true} {...props} />
    </Paper>
  </Background>
);

export const ErrorMessage = (props) => (
  <Background>
    <Paper>
      <FeedbackText delay="0" {...props} />
    </Paper>
  </Background>
);
