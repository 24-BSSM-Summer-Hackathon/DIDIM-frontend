import React from 'react';
import * as s from './style';

const Button = ({ children, ...props }) => {
  return <s.StyledButton {...props}>{children}</s.StyledButton>;
};

export default Button;
