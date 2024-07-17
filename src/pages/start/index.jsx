import React from "react";
import * as s from "./style";

const Start = () => {
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
        <s.LoginButton>로그인</s.LoginButton>
        <s.ButtonInfo>이미 계정이 있으신가요?</s.ButtonInfo>
        </s.ButtonContainer>
      </s.StrartLayout>
    </s.StartBackground>
  );
};

export default Start;
