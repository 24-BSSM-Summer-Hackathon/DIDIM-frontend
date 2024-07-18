import React from "react";
import * as s from "./style";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // 회원가입 페이지의 경로로 설정하세요.
  };

  return (
    <s.StartBackground>
      <s.StrartLayout>
        <s.TextContainer>
          <s.StyledLogo color="#FFFFFF" />
          <s.text>
            <p>지금 바로 시작하세요.<br/>안전한 하루의 시작, 디딤 </p>
          </s.text>
        </s.TextContainer>
        <s.ButtonContainer>
          <s.LoginButton onClick={handleLoginClick}>로그인</s.LoginButton>
          <s.ButtonInfo onClick={handleSignUpClick}>회원가입하러가기</s.ButtonInfo>
        </s.ButtonContainer>
      </s.StrartLayout>
    </s.StartBackground>
  );
};

export default Start;
