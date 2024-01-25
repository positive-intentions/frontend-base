import React from 'react';

const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}111!</button>;
};

export default Button;