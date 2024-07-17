import styled from "styled-components";
import Logo from '../../assets/Logo';

export const LoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: 'pretendard';
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  width: 50px;
  height: 50px;
`;

export const TextContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 375px;
  text-align: left;
`;

export const MainText = styled.div`
  color: #1C1C1E;
  font-size: 24px;
  font-weight: 600;
  margin-top: 5px;
`;

export const SubText = styled.div`
  color: #A5A5A5;
  font-size: 16px;
  font-weight: 400;
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  margin-top: 20px;
  flex-direction: column;
  display: flex;
  width: 100%;
  max-width: 375px;
`;

export const ButtonContainer = styled.div`
  align-items: center;
  flex-direction: column;
  display: flex;
  width: 100%;
  max-width: 375px;
`;

export const HelperTextContainer = styled.div`
  display: flex;
  max-width: 375px;
  align-items: center;
  margin-top: 10px;
`;

export const HelperText = styled.div`
  color: #A5A5A5;
  font-size: 13px;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '|';
    margin: 0 8px;
  }
`;
