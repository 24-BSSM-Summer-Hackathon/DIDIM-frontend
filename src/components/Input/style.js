import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  max-width: 375px;
  background: #F9F9F9;
  color: #1A1E27;
  border: none;
  box-sizing: border-box;
  padding: 15px 16px;
  height: 48px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  ::placeholder {
    color: #BCBCBC;
  }

  &:focus {
    border: 1.5px solid #5A51FF;
    outline: none;
  }
`;
