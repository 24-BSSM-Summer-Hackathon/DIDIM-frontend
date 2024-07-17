import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
  background-color: #fff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 1000;
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

export const NavIcon = styled.img`
  width: 24px;
  height: 24px;
  ${({ active }) => active && `
    filter: invert(34%) sepia(100%) saturate(3359%) hue-rotate(230deg) brightness(89%) contrast(101%);
  `}
`;

export const NavText = styled.div`
  font-size: 12px;
  margin-top: 4px;
  ${({ active }) => active && `
    color: #5A51FF;
  `}
`;
