import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: center;

  @media print {
    display: none;
  }
`;

export const A = styled.a`
  margin-left: 10px;
`;

export const Img = styled.img`
  ${p => p.active ? '' : 'filter: grayscale(0.9) brightness(110%);'}
`;
