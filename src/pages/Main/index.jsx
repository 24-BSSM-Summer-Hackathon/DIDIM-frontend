import React from 'react';
import Footer from '../../components/Footer';
import * as s from './style';


const Main = () => {
  return (
    <s.Container>
      <s.Header>
        <s.Logo />
        <s.UserInfo>
        </s.UserInfo>
      </s.Header>
      <s.Content>
          <s.Greeting>👋🏻 강민지님</s.Greeting>
        <s.Card>
          <s.CardTitle>2024 7월 17일 수요일</s.CardTitle>
          <s.CardText>강시우님의 스트레스 지수</s.CardText>
          <s.Percentage>12%</s.Percentage>
          <s.Emoji>😊</s.Emoji>
        </s.Card>
        <s.Message>노후 건강, 잊지말고 챙겨야죠! 😊</s.Message>
        <s.Card>
          <s.CardTitle>자신의 건강이 의심된다면?</s.CardTitle>
          <s.CardText>치매 자가 진단으로 간단하게 확인해보세요!</s.CardText>
        </s.Card>
        <s.Card>
          <s.CardTitle>홀로 일상생활을 하기 어려운 취약노인을 위한</s.CardTitle>
          <s.CardText>노인맞춤돌봄서비스</s.CardText>
        </s.Card>
        <s.Card>
          <s.CardTitle>몰라서 안 받으면 손해잖아요!</s.CardTitle>
          <s.CardText>만 65세 이상 어르신 목욕 및 이·미용비 지원</s.CardText>
        </s.Card>
      </s.Content>
      <Footer />
    </s.Container>
  );
};

export default Main;
