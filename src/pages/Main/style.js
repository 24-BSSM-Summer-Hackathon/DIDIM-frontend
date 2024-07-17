import styled from "styled-components";
import LogoImage from "../../assets/Logo";

export const MainLayout = styled.div `
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f9f9f9;
  padding: 0 24px;
`;

export const Header = styled.header`
  display: flex; 
  flex-direction: row;
  padding: 16px;

`;

export const Logo = styled(LogoImage)`
  width: 25.06px;
  height: 23.53px;
  margin-right: 5px;
`;

export const LogoText = styled.div`
  color: #5a51ff;
  font-size: 17px;
  font-weight: 600;
  margin-top: 2px;
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
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px;
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

export const Emoji = styled.img`
  position: absolute;
  right: 50px;
  top:150px;
`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;
