import styled from 'styled-components';

const big = 660;
const small = big - 1;

export const Table = styled.table`
  td:nth-child(1) {
    color: var(--main-color);
  }
  @media print {
    td:nth-child(1) {
      color: var(--black);
    }
  }

  @media (max-width: ${small}px) {
    tr, td {
      display: block;
    }
    tr {
      padding: 10px 0;
    }
    td:nth-child(1) {
      margin-bottom: 7px;
    }
    @media NOT print {
      tr:nth-child(1) {
        td:nth-child(1) {
          border: 1px solid var(--main-color);
          display: inline-block;
          padding: 3px 5px 1px;
          border-radius: 3px;
          font-style: italic;
        }
      }
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
    }
  }

  h4, h5 {
    margin: 0;
  }

  @media print {
    page-break-inside: avoid;

    tr {
      display: table-row;
      padding: initial;
    }
    td {
      display: table-cell;
      padding: 8px 0;
    }
    td:nth-child(1) {
      padding: 8px 0;
    }

    padding-top: 8px;
    &:nth-child(1) {
      padding-top: 0;
    }

    td {
      vertical-align: top;
    }
    td:nth-child(1) {
      width: 160px;

      text-align: right;
      padding-right: 16px;
    }
  }
`;

export const Nowrap = styled.span`
  white-space: nowrap;
`;

export const SmallBr = styled.div`
  height: 10px;
`;
