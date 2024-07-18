import React from 'react';
import * as s from './style';
import brainIcon from '../../assets/Brain.png';
import heartIcon from '../../assets/Anatomical heart.png';
import happy from '../../assets/state/good.png'
import Footer from '../../components/Footer';

const Manage = () => {
  const registerName = "강시우";
  return (
    <s.ManageLayout>

    <s.Container>

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
          <s.Card>
        <s.Icon src={brainIcon} alt="혈압" />
        <s.Info>
          <s.Title>혈압</s.Title>
          <s.Value>120<s.Unit>mmhg</s.Unit></s.Value>
        </s.Info>
      </s.Card>
      <s.Card>
        <s.Icon src={heartIcon} alt="심박수" />
        <s.Info>
          <s.Title>심박수</s.Title>
          <s.Value>100<s.Unit>mmhg</s.Unit></s.Value>
        </s.Info>
      </s.Card>
    <Footer/>
    </s.Container>
    </s.ManageLayout>
      

  );
};

export default Manage;