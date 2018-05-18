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
      padding: 1rem 0;
    }
    td:nth-child(1) {
      margin-bottom: .7rem;
    }
    @media NOT print {
      tr:nth-child(1) {
        td:nth-child(1) {
          border: 1px solid var(--main-color);
          display: inline-block;
          padding: .3rem .5rem .1rem;
          border-radius: .3rem;
          font-style: italic;
        }
      }
    }

    padding-top: 1rem;
    &:nth-child(1) {
      padding-top: 0;
    }
  }

  @media (min-width: ${big}px) {
    td {
      padding: 1rem 0;
      vertical-align: top;
    }
    td:nth-child(1) {
      width: 18rem;

      text-align: right;
      padding-right: 2rem;
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
      padding: .8rem 0;
    }
    td:nth-child(1) {
      padding: .8rem 0;
    }

    padding-top: .8rem;
    &:nth-child(1) {
      padding-top: 0;
    }

    td {
      vertical-align: top;
    }
    td:nth-child(1) {
      width: 16rem;

      text-align: right;
      padding-right: 1.6rem;
    }
  }
`;

export const Nowrap = styled.span`
  white-space: nowrap;
`;

export const SmallBr = styled.div`
  height: 1rem;
`;
