import styled from 'styled-components';
import LogoImage from '../../assets/Logo'; // 로고 이미지 경로를 확인하세요


export const SerialLayout = styled.div ` 
height: 100vh;
width: 100vw;
`
export const SerialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const MainText = styled.div`
  color: #1C1C1E;
  font-size: 20px;
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
  font-size: 18px;
  outline: none;

  &:focus {
    border-color: #5A51FF;
  }
`;

