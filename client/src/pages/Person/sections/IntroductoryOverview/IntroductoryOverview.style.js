import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${p => p.column ? 'column' : 'row'};
`;
