import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 16px;
  box-sizing: border-box;
  font-family: 'pretendard';
  padding: 0 24px;
`;

export const Header = styled.header`
display: flex;
flex-direction: row;
align-items: center;
padding: 11px 24px;
isolation: isolate;
width: 100%;
max-width: 375px;
height: 40px;


`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const Content = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;/* Frame 7289 */
box-sizing: border-box;
height: 77px;
background: #FFFFFF;
border: 1px solid rgba(0, 0, 0, 0.05);
border-radius: 10px;
`;

export const Location = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
`;

export const Address = styled.div`
  font-size: 14px;
  color: #666;
`;

export const TimeAgo = styled.div`
  font-size: 12px;
  color: #999;
`;
