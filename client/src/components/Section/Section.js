import styled from 'styled-components';

export const Section = styled.div`
  padding: 0 2.5rem;

  @media print {
    ${p => p.allowPageBreak
      ? ''
      : 'page-break-inside: avoid;'
    }
  }
`;

export const Title = styled.h3`
  margin: 2.0rem .5rem .8rem;
  border-bottom: 1px solid var(--secondary-border-color);
  color: var(--main-color);
  text-transform: uppercase;

  @media print {
    page-break-after: avoid;
    color: var(--black);
    border-bottom-color: var(--black);
  }
`;

export const Content = styled.div`
  padding-top: .5rem;
  padding-left: .4rem;
`;

export const NoPageBreak = styled.div`
  @media print {
    page-break-inside: avoid;
  }
`;
