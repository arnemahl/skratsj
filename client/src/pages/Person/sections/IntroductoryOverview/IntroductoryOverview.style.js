import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImg = styled.img`
  border-radius: 50%;
  min-width: ${p => p.size}px;
  max-width: ${p => p.size}px;
  min-height: ${p => p.size}px;
  max-height: ${p => p.size}px;
  margin: 20px;
  margin-left: 0;
`;

export const Description = styled.div`
  margin-right: -25px;
  background-color: #b57e43;
  color: white;
  padding: 20px;
`;

export const Name = styled.h1`
  margin: 0;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const Title = styled.h2`
  margin: 3px 0 20px;
  border-bottom: 1px solid white;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const Introduction = styled.div`
  line-height: 1.3;
`;
