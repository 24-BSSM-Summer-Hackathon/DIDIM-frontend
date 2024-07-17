import React from 'react';
import * as s from "./style";
import Button from '../../components/Button';

const Serial = () => {
  const serialInputs = Array(5).fill("");

  

  return (
    <s.SerialContainer>
      <s.TextContainer>
      <s.Logo />
        <s.MainText>링에 적힌 시리얼코드를<br/>입력하세요!</s.MainText>
      </s.TextContainer>
      <s.InputContainer>
        {serialInputs.map((_, index) => (
          <s.SerialInput key={index} />
        ))}
      </s.InputContainer>
        <Button text="등록"></Button>
    </s.SerialContainer>
  );
};

export default Serial;
