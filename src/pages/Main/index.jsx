import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';
import * as s from './style';
import happy from '../../assets/state/good.png';
import soso from '../../assets/state/soso.png';
import bad from '../../assets/state/bad.png';
import arrow from '../../assets/arrow.svg';
import frame1 from '../../assets/Frame 7293.png';
import frame2 from '../../assets/Frame 7294.png';
import frame3 from '../../assets/Frame 7296.png';

const Main = () => {
  const userName = "강민지";
  const registerName = "강시우";
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <s.MainLayout>
      <s.Container>
        <s.Header>
          <s.Logo />
          <s.LogoText>DIDIM</s.LogoText>
        </s.Header>
        <s.Content>
          <s.Greeting>👋🏻 {userName}님, 환영합니다.</s.Greeting>
          <s.Card>
            <s.CardHeader>
              <div>
                <s.CardTitle>2024 7월 17일 수요일</s.CardTitle>
                <s.CardText>{registerName}님의 스트레스 지수</s.CardText>
              </div>
              <s.Arrow src={arrow} />
            </s.CardHeader>
            <s.EmojiContainer>
              <s.Percentage>12%</s.Percentage>
              <s.Emoji src={happy} />
            </s.EmojiContainer>
          </s.Card>
          <s.Message>노후 건강, 잊지말고 챙겨야죠! 😊</s.Message>
          <s.ImageCard onClick={() => handleCardClick('/Test')}>
            <s.CardImage src={frame1} />
          </s.ImageCard>
          <s.ImageCard onClick={() => handleCardClick('/page2')}>
            <s.CardImage src={frame2} />
          </s.ImageCard>
          <s.ImageCard onClick={() => handleCardClick('/page3')}>
            <s.CardImage src={frame3} />
          </s.ImageCard>
        </s.Content>
        <Footer />
      </s.Container>
    </s.MainLayout>
  );
};

export default Main;
