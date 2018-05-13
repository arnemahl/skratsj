import styled from 'styled-components';

export const Section = styled.div`
  margin-top: 25px;
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
`;

export const Description = styled.div`
  background-color: #b57e43;
  color: white;
  padding: 20px;
`;

export const Name = styled.h1`
  font-weight: 300;
  margin: 0;
`;

export const Title = styled.h2`
  border-bottom: 1px solid white;
  margin: 3px 0 20px;
  font-weight: 300;
`;

export const Introduction = styled.div`
  line-height: 1.3;
`;
