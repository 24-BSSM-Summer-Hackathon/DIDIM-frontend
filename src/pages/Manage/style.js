import styled from "styled-components";
import LogoImage from "../../assets/Logo";

export const ManageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  `;

export const Container = styled.div`
align-items: center;
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


export const BigCard = styled.div`
width: 100%;
max-width: 375px;
height: 143px;
background: #FFFFFF;
border-radius: 10px;
padding: 16px;

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
  align-items: end;
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

`;

export const Arrow = styled.img`
  width: 8px;
  height: 14px;
`;

export const Message = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0 0px 0;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  width: 45%;
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

export const Title = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
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
