import React, { useState } from 'react';
import * as s from './style';
import { ReactComponent as HomeIcon } from '../../assets/footer/home.svg';
import { ReactComponent as FootIcon } from '../../assets/footer/foot.svg';
import { ReactComponent as ManageIcon } from '../../assets/footer/manage.svg';
import { ReactComponent as MyIcon } from '../../assets/footer/my.svg';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <s.FooterContainer>
      <s.NavItem active={activeTab === 'home'} onClick={() => handleTabClick('home')}>
        <HomeIcon style={{ color: activeTab === 'home' ? '#5A51FF' : '#D9D9D9' }} />
        <s.NavText active={activeTab === 'home'}>홈</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'foot'} onClick={() => handleTabClick('foot')}>
        <FootIcon style={{ color: activeTab === 'foot' ? '#5A51FF' : '#D9D9D9' }} />
        <s.NavText active={activeTab === 'foot'}>발자국</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'manage'} onClick={() => handleTabClick('manage')}>
        <ManageIcon style={{ color: activeTab === 'manage' ? '#5A51FF' : '#D9D9D9' }} />
        <s.NavText active={activeTab === 'manage'}>관리</s.NavText>
      </s.NavItem>
      <s.NavItem active={activeTab === 'my'} onClick={() => handleTabClick('my')}>
        <MyIcon style={{ color: activeTab === 'my' ? '#5A51FF' : '#D9D9D9' }} />
        <s.NavText active={activeTab === 'my'}>MY</s.NavText>
      </s.NavItem>
    </s.FooterContainer>
  );
};

export default Footer;
