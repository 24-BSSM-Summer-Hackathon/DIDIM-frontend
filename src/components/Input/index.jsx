import React from 'react';
import * as s from './style';


const Input = ({ placeholder, type = "text", ...props }) => {
  return <s.StyledInput placeholder={placeholder} type={type} {...props} />;
};

export default Input;
