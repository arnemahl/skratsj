import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  color: var(--main-color-light);
  text-decoration: none;

  @media print {
    display: none;
  }
`;

const iconMap = {
  link: 'fas fa-link',
  github: 'fab fa-github',
};

export const LinkWIcon = ({ url, icon = 'link' }) => (
  <A className={iconMap[icon]} href={url} />
);
