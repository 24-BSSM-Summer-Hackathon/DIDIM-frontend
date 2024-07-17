import React, { useState, useRef, useEffect } from 'react';
import * as s from "./style";
import Button from '../../components/Button';

const Serial = () => {
  const serialInputs = Array(5).fill("");
  const [inputFocused, setInputFocused] = useState(false);
  const inputRefs = useRef([]);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const newKeyboardHeight = window.innerHeight < window.screen.height ? window.screen.height - window.innerHeight : 0;
      setKeyboardHeight(newKeyboardHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleInputChange = (index, e) => {
    if (e.target.value.length === 1 && index < serialInputs.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  return (
    <s.SerialContainer>
      <s.TextContainer>
        <s.Logo />
        <s.MainText>링에 적힌 시리얼코드를<br/>입력하세요!</s.MainText>
      </s.TextContainer>
      <s.InputContainer>
        {serialInputs.map((_, index) => (
          <s.SerialInput
            key={index}
            ref={el => inputRefs.current[index] = el}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={(e) => handleInputChange(index, e)}
            maxLength={1}
          />
        ))}
      </s.InputContainer>
      <s.Spacer inputFocused={inputFocused} keyboardHeight={keyboardHeight} />
      <s.ButtonWrapper inputFocused={inputFocused} keyboardHeight={keyboardHeight}>
        <Button text="등록"></Button>
      </s.ButtonWrapper>
    </s.SerialContainer>
  );
};

export default Serial;
