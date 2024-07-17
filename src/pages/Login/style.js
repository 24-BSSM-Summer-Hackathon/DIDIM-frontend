import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const MainText = styled.div`
  color: #1C1C1E;
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0;
  text-align: center;
`;

export const HelperTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  margin: 16px 0;
`;

export const HelperText = styled.div`
  color: #8E8E93;
  font-size: 14px;
  cursor: pointer;
  &:not(:last-child)::after {
    content: '|';
    margin: 0 8px;
  }
`;
