import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 10;
  font-family: 'pretendard';
  border-top: 1px solid #f9f9f9;
`;

export const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  ${({ active }) => active && `
    color: #5A51FF;
  `}
`;

export const NavText = styled.div`
  font-size: 11px;
  font-weight: 500;
  margin-top: 4px;
  color: #d2d2d2;
  ${({ active }) => active && `
    color: #5A51FF;
  `}
`;
