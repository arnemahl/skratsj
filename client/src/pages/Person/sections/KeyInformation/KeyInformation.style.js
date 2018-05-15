import styled from 'styled-components';

export const Section = styled.div`
  padding: 25px;
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
`;

export const Entry = styled.div`
  padding: 7px;
  padding-left: 0;
  min-width: 50%;
  box-sizing: border-box;
`;
export const Icon = styled.span`
  width: 33px;
  text-align: center;
  color: var(--main-color);
`;
