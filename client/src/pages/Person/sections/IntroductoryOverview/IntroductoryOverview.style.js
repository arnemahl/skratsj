import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    background-color: var(--main-color);
  }
  @media (min-width: 768px) {
    padding-top: 25px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  min-width: ${p => p.size}px;
  max-width: ${p => p.size}px;
  min-height: ${p => p.size}px;
  max-height: ${p => p.size}px;

  @media (max-width: 767px) {
    border: 3px solid var(--white);
    margin: 33px 15px 10px;
  }
  @media (min-width: 768px) {
    margin: 20px;
    margin-left: 30px;
  }
`;

export const Description = styled.div`
  background-color: var(--main-color);
  color: var(--white);
  padding: 20px;
`;

export const Name = styled.h1`
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const Title = styled.h2`
  margin: 3px 0 20px;
  border-bottom: 1px solid var(--white);
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const Introduction = styled.div`
  line-height: 1.3;
`;
