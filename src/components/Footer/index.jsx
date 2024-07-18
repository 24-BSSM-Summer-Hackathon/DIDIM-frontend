import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as s from './style';
import { ReactComponent as HomeIcon } from '../../assets/footer/home.svg';
import { ReactComponent as FootIcon } from '../../assets/footer/foot.svg';
import { ReactComponent as ManageIcon } from '../../assets/footer/manage.svg';
import { ReactComponent as MyIcon } from '../../assets/footer/my.svg';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab = location.pathname.split('/')[1] || 'home';

  const handleTabClick = (tab) => {
    navigate(`/${tab}`);
  };

  return (
    <s.FooterContainer>
      <s.NavItem active={activeTab === 'main'} onClick={() => handleTabClick('main')}>
        <HomeIcon />
        <s.NavText active={activeTab === 'main'}>홈</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'footprint'} onClick={() => handleTabClick('footprint')}>
        <FootIcon />
        <s.NavText active={activeTab === 'footprint'}>발자국</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'manage'} onClick={() => handleTabClick('manage')}>
        <ManageIcon />
        <s.NavText active={activeTab === 'manage'}>관리</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'mypage'} onClick={() => handleTabClick('mypage')}>
        <MyIcon />
        <s.NavText active={activeTab === 'mypage'}>MY</s.NavText>
      </s.NavItem>
    </s.FooterContainer>
  );
};

export default Footer;
