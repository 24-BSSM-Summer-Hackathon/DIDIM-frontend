import React, { useState } from 'react';
import * as s from './style';
import HomeIcon from '../../assets/footer/home.svg';
import FootIcon from '../../assets/footer/foot.svg';
import ManageIcon from '../../assets/footer/manage.svg';
import MyIcon from '../../assets/footer/my.svg';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <s.FooterContainer>
      <s.NavItem active={activeTab === 'home'} onClick={() => handleTabClick('home')}>
        <s.NavIcon src={HomeIcon} active={activeTab === 'home'} />
        <s.NavText active={activeTab === 'home'}>홈</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'foot'} onClick={() => handleTabClick('foot')}>
        <s.NavIcon src={FootIcon} active={activeTab === 'foot'} />
        <s.NavText active={activeTab === 'foot'}>발자국</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'manage'} onClick={() => handleTabClick('manage')}>
        <s.NavIcon src={ManageIcon} active={activeTab === 'manage'} />
        <s.NavText active={activeTab === 'manage'}>관리</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'my'} onClick={() => handleTabClick('my')}>
        <s.NavIcon src={MyIcon} active={activeTab === 'my'} />
        <s.NavText active={activeTab === 'my'}>MY</s.NavText>
      </s.NavItem>
    </s.FooterContainer>
  );
};

export default Footer;
