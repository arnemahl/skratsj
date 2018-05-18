import styled from 'styled-components';

export const Section = styled.div`
  padding: 2.5rem;
  padding-bottom: 0;

  a {
    color: inherit;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 550px) {
    flex-direction: column;
  }
  @media print {
    flex-direction: row;
  }
`;

export const Entry = styled.div`
  padding: .7rem;
  padding-left: 0;
  min-width: 50%;
  box-sizing: border-box;

  @media print {
    min-width: unset;
  }
`;
export const Icon = styled.span`
  width: 3.3rem;
  text-align: center;
  color: var(--main-color);

  @media print {
    color: var(--black);
  }
`;
