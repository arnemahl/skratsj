import styled from 'styled-components';

const big = 660;
const small = big - 1;

export const Table = styled.table`
  td:nth-child(1) {
    color: var(--main-color);
  }

  @media (max-width: ${small}px) {
    tr, td {
      display: block;
    }
    tr {
      padding: 10px 0;
    }
    td:nth-child(1) {
      padding-bottom: 7px;
    }

    padding-top: 10px;
    &:nth-child(1) {
      padding-top: 0;
    }
  }

  @media (min-width: ${big}px) {
    td {
      padding: 10px 0;
      vertical-align: top;
    }
    td:nth-child(1) {
      width: 180px;

      text-align: right;
      padding-right: 20px;
      color: var(--main-color);
    }
  }

  h4, h5 {
    margin: 0;
  }
`;

export const Nowrap = styled.span`
  white-space: nowrap;
`;

export const SmallBr = styled.div`
  height: 10px;
`;
