import styled from 'styled-components';

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;
export const TableData = styled.td`
  text-align: center;
  padding: 10px 40px;
  text-transform: capitalize;
`;
