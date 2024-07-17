import React from 'react';
import * as s from './style';
import { useNavigate } from 'react-router-dom';
import BackIcon from '../../assets/back'; // 정확한 경로로 import

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <s.HeaderContainer>
      <s.BackButton onClick={() => navigate(-1)}>
        <BackIcon  />
      </s.BackButton>
      <s.Title>{title}</s.Title>
      <div></div> 
    </s.HeaderContainer>
  );
};

export default Header;
