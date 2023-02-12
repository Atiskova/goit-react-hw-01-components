import styled from 'styled-components';

export const Container = styled.section`
  width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.9);

  &:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  color: rgb(192, 192, 192);
  padding: 30px 0;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const StatItem = styled.li`
  width: calc(100% / 4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${getRandomRgb};
`;

export const Label = styled.span`
  color: rgba(241, 241, 241);
  padding: 10px;
`;

export const Percentage = styled.span`
  color: rgba(241, 241, 241);
  padding: 10px;
`;

function getRandomRgb() {
  var num = Math.round(0xffffff * Math.random());
  var r = num >> 16;
  var g = (num >> 8) & 255;
  var b = num & 255;
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
