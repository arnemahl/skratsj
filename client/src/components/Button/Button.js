import styled from 'styled-components';

export default styled.button`
  display: table;
  cursor: pointer;

  ${p => p.solid ? `
    background: var(--main-color);
    color: var(--white);
  ` : `
    background: var(--white);
    color: var(--main-color);
  `}
  border: 1px solid var(--main-color);
  border-radius: 4px;

  padding: .3rem 1rem;
  line-height: 2rem;

  @media print {
    display: none;
  }
`;
