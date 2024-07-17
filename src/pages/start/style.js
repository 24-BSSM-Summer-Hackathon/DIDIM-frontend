import styled from "styled-components";
import BackgroundImage from "../../assets/background.png";
import Logo from '../../assets/Logo';

export const StartBackground = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'pretendard';
`;

export const StrartLayout = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const StyledLogo = styled(Logo)`
  width: 70px;
  height: 70px;
  fill: ${({ color }) => color || "#FFFFFF"};
`;

export const text = styled.div`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`;

export const TextContainer = styled.div`
  margin-top:100px ;
  align-items: left;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 20px;
`;

export const LoginButton = styled.button`
  justify-content: center;
  align-items: center;
  padding: 10px 135px;
  border: none;
  width: 320px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  background: #FFFFFF;
  color: #5A51FF;
  border-radius: 10px;
  margin-bottom: 8px;
`;

export const ButtonInfo = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #FFFFFF;
  flex-grow: 0;
`;
