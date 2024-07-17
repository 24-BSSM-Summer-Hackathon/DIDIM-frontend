import styled from "styled-components";
import LogoImage from "../../assets/Logo";

export const MainLayout = styled.div `
  width: 100vw;
  height: 100vh;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 16px 0;

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

export const Arrow = styled.img`
width: 8px;
height: 14px;

`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Emoji = styled.img`

`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;
