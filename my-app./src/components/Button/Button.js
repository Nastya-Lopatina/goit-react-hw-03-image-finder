import React from 'react';
import style from './button.module.css'

const Button = ({fetchImages}) => (
    <button type="button" className={style.Button} onClick={fetchImages}>
    Load more...
  </button>
);

export default Button;