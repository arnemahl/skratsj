import styled from 'styled-components';

const TechTag = styled.span`
  display: inline-block;

  margin: 0 8px 10px 0;
  line-height: 20px;

  font-size: 14px;
  border-radius: 4px;

  ${p => p.solid ? `
  color: var(--white);
  background-color: var(--main-color);
  padding: 3px 10px;
  ` : `
  color: var(--main-color);
  border: 1px solid var(--main-color);
  padding: 2px 9px;
  `}

  @media print {
    background-color: unset;
    color: var(--black);
    border: 1px solid var(--black);
    padding: 2px 9px;
  }
`;

export default TechTag;
