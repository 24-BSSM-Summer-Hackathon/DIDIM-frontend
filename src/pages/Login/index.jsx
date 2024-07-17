import React from 'react';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import * as s from './style';

const Login = ({ mainText }) => {
  return (
    <div>
      <Header title="로그인" />
      <s.LoginContainer>
        <s.MainText dangerouslySetInnerHTML={{ __html: mainText }} />
        <Input placeholder="아이디를 입력하세요." />
        <Input placeholder="비밀번호를 입력하세요." type="password" />
        <Button>로그인</Button>
        <s.HelperTextContainer>
          <s.HelperText>비밀번호찾기</s.HelperText>
          <s.HelperText>아이디찾기</s.HelperText>
          <s.HelperText>회원가입</s.HelperText>
        </s.HelperTextContainer>
      </s.LoginContainer>
    </div>
  );
};

export default Login;
