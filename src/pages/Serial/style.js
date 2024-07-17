import styled, { css } from 'styled-components';
import LogoImage from '../../assets/Logo';

export const SerialLayout = styled.div`
  font-family: 'pretendard';
  height: 100vh;
  width: 100vw;
`;

export const SerialContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #F9F9F9;
  padding: 20px;
`;

export const Logo = styled(LogoImage)`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
  max-width: 375px;
`;

export const MainText = styled.div`
  color: #1C1C1E;
  font-size: 24px;
  font-weight: 600;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 20px;
  width: 100%;
  max-width: 375px;
`;

export const SerialInput = styled.input`
  width: 56px;
  height: 60px;
  background: #FFFFFF;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  outline: none;

  &:focus {
    border-color: #5A51FF;
  }
`;

export const Spacer = styled.div`
  flex-grow: 1;
  ${({ inputFocused, keyboardHeight }) =>
    inputFocused &&
    css`
      height: ${keyboardHeight}px;
    `}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 50px;
  width: calc(100% - 48px);
  transition: bottom 0.3s ease;
  ${({ inputFocused, keyboardHeight }) =>
    inputFocused &&
    css`
      bottom: ${keyboardHeight + 50}px;
    `}
`;
