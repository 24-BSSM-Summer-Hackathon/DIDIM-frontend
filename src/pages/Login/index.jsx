import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as s from "./style";

const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/main');
  };

  return (
    <div>
      <Header title="로그인" />
      <s.LoginContainer>
        <s.TextContainer>
          <s.StyledLogo />
          <s.MainText>
            안녕하세요 :)
            <br />
            내일의 디딤돌, 디딤입니다.
          </s.MainText>
          <s.SubText>다시 오신 것을 진심으로 환영합니다.</s.SubText>
        </s.TextContainer>
        <s.InputContainer>
          <Input placeholder="아이디를 입력하세요." />
          <Input placeholder="비밀번호를 입력하세요." type="password" />
        </s.InputContainer>
        <s.ButtonContainer>
          <Button text="로그인" onClick={handleLoginClick}></Button>
          <s.HelperTextContainer>
            <s.HelperText>비밀번호찾기</s.HelperText>
            <s.HelperText>아이디찾기</s.HelperText>
            <s.HelperText>회원가입</s.HelperText>
          </s.HelperTextContainer>
        </s.ButtonContainer>
      </s.LoginContainer>
    </div>
  );
};

export default Login;
