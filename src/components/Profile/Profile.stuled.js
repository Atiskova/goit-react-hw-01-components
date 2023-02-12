import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  margin: 20px auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  overflow: hidden;
`;

export const Description = styled.div`
  margin-top: 20px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 300px;
  border-radius: 100%;
  margin: 0 auto;
  padding: 30px;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: 700;
  margin: 10px 0;
`;

export const Tag = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Location = styled.p`
  font-size: 20px;
  margin: 10px 0;
`;

export const Stats = styled.ul`
  display: flex;
  margin-top: 30px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding: 20px 0;
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  color: #838383;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 24px;
  color: #333333;
`;
