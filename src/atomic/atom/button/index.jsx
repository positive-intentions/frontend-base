import React from "react";

import './index.scss'

const Button = ({ ...rest }) => {
  return <button {...rest} />;
};

export default Button;
