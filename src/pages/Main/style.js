import styled from "styled-components";
import LogoImage from "../../assets/Logo";

export const MainLayout = styled.div`
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
  padding: 0 24px ;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
  align-items: center;
  width: 100%;
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
  margin-bottom: 10px;
`;

export const Content = styled.main`
  flex: 1;
  padding: 16px;
  width: 100%;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 16px; 
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

export const Arrow = styled.img`
  width: 8px;
  height: 14px;
`;

export const Message = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin: 20px 0 0 0;
`;

export const ImageCard = styled.div`
  margin: 16px 0;
  width: 100%;
  cursor: pointer;
`;

export const CardImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
