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
`;

export const StrartLayout = styled.div`
  padding: 0 24px;
`;

export const StyledLogo = styled(Logo)`
  width: 200px;
  height: 200px;
  fill: ${({ color }) => color || "#FFFFFF"};
`;
