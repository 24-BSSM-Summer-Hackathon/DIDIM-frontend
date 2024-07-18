import styled from 'styled-components';

export const ManageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 16px 0;
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const StatusCard = styled.div`
  width: 100%;
  max-width: 375px;
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const StatusDot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${props => props.isOnline ? '#4caf50' : '#f44336'};
  border-radius: 50%;
  margin-right: 8px;
`;

export const StatusText = styled.div`
  font-size: 16px;
  color: ${props => props.isOnline ? '#4caf50' : '#f44336'};
`;

export const BigCard = styled.div`
  width: 100%;
  max-width: 375px;
  background: #ffffff;
  border-radius: 10px;
  padding: 16px;
  margin: 16px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Percentage = styled.div`
  font-size: 32px;
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
  width: 32px;
  height: 32px;
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
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 48%;
`;

export const Icon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
