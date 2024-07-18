import React from "react";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";

import * as s from "./style";

const Login = () => {
  return (
    <div>
      <Header title="회원가입" />
      <s.LoginContainer>
        <s.TextContainer>
          <s.StyledLogo />
          <s.MainText>
            반갑습니다 :)
            <br />
            내일의 디딤돌, 디딤입니다.
          </s.MainText>
          <s.SubText>회원가입을 위한 정보를 입력해주세요.</s.SubText>
        </s.TextContainer>
        <s.InputContainer>
          <Input placeholder="이름을 입력하세요." />
          <Input placeholder="아이디를 입력하세요." />
          <Input placeholder="비밀번호를 입력하세요." type="password" />
        </s.InputContainer>
        <s.ButtonContainer>
          <Button text="회원가입"></Button>
        </s.ButtonContainer>
      </s.LoginContainer>
    </div>
  );
};

export default Login;
