import styled from 'styled-components';
import LogoImage from '../../components/Footer';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #F9F9F9;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #FFF;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled(LogoImage)`
  width: 40px;
  height: 40px;
  margin-right: 16px;
`;

export const UserInfo = styled.div`
  flex-grow: 1;
`;

export const Greeting = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Content = styled.main`
  flex: 1;
  padding: 16px;
`;

export const Card = styled.div`
  background-color: #FFF;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  color: #5A51FF;
`;

export const Emoji = styled.div`
  font-size: 32px;
`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;
