import styled from 'styled-components';

export const ManageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'pretendard';
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  padding: 0 24px;
  overflow-y: auto;
  box-sizing: border-box;
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

export const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const StatusCard = styled.div`
  width: 100%;
  max-width: 375px;
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin: 14px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const StatusDot = styled.div`
  width: 7px;
  height: 7px;
  background-color: ${props => props.isOnline ? '#4caf50' : '#f44336'};
  border-radius: 50%;
  margin-right: 10px;
`;

export const StatusText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.isOnline ? '#4caf50' : '#f44336'};
`;

export const BigCard = styled.div`
  width: 100%;
  max-width: 375px;
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin: 0 0 14px 0;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardTitle = styled.div`
  font-size: 14px;
  color: #999;
  margin-bottom: 8px;
`;

export const CardText = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Percentage = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #5a51ff;
`;

export const EmojiContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: end;
`;

export const Emoji = styled.img`

`;

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  box-sizing: border-box;
`;

export const MiniCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  width: 48%;
  height: 110px;
  box-sizing: border-box;
`;
export const CardTitleMini = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: #000;
  margin-bottom: 24px;
`;

export const MiniCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin:0 10px 30px 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #5a51ff;
`;

export const Unit = styled.span`
  font-size: 16px;
  color: #999;
  margin-left: 4px;
`;
