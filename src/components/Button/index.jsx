import React from 'react';
import * as s from './style';

const Button = ({ text, ...props }) => {
  return <s.StyledButton {...props}>{text}</s.StyledButton>;
};

export default Button;
