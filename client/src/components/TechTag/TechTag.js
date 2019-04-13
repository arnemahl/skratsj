import styled from 'styled-components';

const TechTag = styled.span`
  display: inline-block;

  margin: 0 .8rem 1rem 0;
  line-height: 2rem;

  font-size: 1.4rem;
  border-radius: .4rem;
  border-radius: 0;

  ${p => p.solid ? `
  color: var(--white);
  background: var(--colored-background);
  padding: .3rem 1rem;
  ` : `
  color: var(--main-color);
  border: .1rem solid var(--main-border-color);
  padding: .2rem .9rem;
  `}

  @media print {
    background-color: unset;
    color: var(--black);
    border: .1rem solid var(--black);
    padding: .2rem .9rem;
  }
`;

export default TechTag;
