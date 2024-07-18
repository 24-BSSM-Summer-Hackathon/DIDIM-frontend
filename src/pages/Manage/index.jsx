import React, { useState } from 'react';
import * as s from './style';
import brainIcon from '../../assets/Brain.png';
import heartIcon from '../../assets/Anatomical heart.png';
import happy from '../../assets/state/good.png';
import Footer from '../../components/Footer';

const Manage = () => {
  const registerName = "강시우";
  const [isOnline, setIsOnline] = useState(true);

  const toggleStatus = () => {
    setIsOnline(!isOnline);
  };

  return (
    <s.ManageLayout>
      <s.Container>
        <s.Header>
          <s.HeaderTitle>관리</s.HeaderTitle>
        </s.Header>
        <s.StatusCard onClick={toggleStatus}>
          <s.StatusDot isOnline={isOnline} />
          <s.StatusText isOnline={isOnline}>
            {isOnline ? '온라인' : '오프라인'}
          </s.StatusText>
        </s.StatusCard>
        <s.BigCard>
          <s.CardHeader>
            <div>
              <s.CardTitle>2024 7월 17일 수요일</s.CardTitle>
              <s.CardText>{registerName}님의 스트레스 지수</s.CardText>
            </div>
          </s.CardHeader>
          <s.EmojiContainer>
            <s.Percentage>12%</s.Percentage>
            <s.Emoji src={happy} />
          </s.EmojiContainer>
        </s.BigCard>
        <s.CardRow>
          <s.MiniCard>
            <s.Icon src={brainIcon} alt="혈압" />
            <s.Info>
              <s.CardTitle>혈압</s.CardTitle>
              <s.Value>120<s.Unit>mmhg</s.Unit></s.Value>
            </s.Info>
          </s.MiniCard>
          <s.MiniCard>
            <s.Icon src={heartIcon} alt="심박수" />
            <s.Info>
              <s.CardTitle>심박수</s.CardTitle>
              <s.Value>100<s.Unit>bpm</s.Unit></s.Value>
            </s.Info>
          </s.MiniCard>
        </s.CardRow>
        <Footer />
      </s.Container>
    </s.ManageLayout>
  );
};

export default Manage;
