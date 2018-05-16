import styled from 'styled-components';

export const Section = styled.div`
  padding: 0 25px;

  @media print {
    page-break-inside: avoid;
  }
`;

export const Title = styled.h3`
  margin: 20px 5px 8px;
  border-bottom: 1px solid var(--main-color);
  color: var(--main-color);
  text-transform: uppercase;

  @media print {
    page-break-after: avoid;
    color: var(--black);
    border-bottom-color: var(--black);
  }
`;

export const Content = styled.div`
  padding-top: 5px;
  padding-left: 4px;
`;
