import React from "react";

import style from './index.module.scss'

const Button = ({ ...rest }) => {
  return <button className={style.MyButton} {...rest} />;
};

export default Button;
