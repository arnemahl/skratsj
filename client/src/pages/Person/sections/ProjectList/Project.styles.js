import styled from 'styled-components';

export const Table = styled.table`
  td {
    padding: 10px 0;
    vertical-align: top;
  }
  td:nth-child(1) {
    width: 150px;

    text-align: right;
    padding-right: 20px;
    color: #767676;
  }

  h4, h5 {
    margin: 0;
  }
`;

export const Nowrap = styled.span`
  white-space: nowrap;
`;
