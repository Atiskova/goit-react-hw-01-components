import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-shadow: 0 0 3px 3px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
export const Status = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    return isOnline ? 'green' : 'red';
  }};
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
`;
