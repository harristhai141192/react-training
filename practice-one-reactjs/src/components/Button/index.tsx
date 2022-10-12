import React from 'react';
import './index.styles.css';

interface ButtonProps {
  typeBtn?: 'submit' | 'button' | 'reset';
  btnStyle?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({
  typeBtn,
  btnStyle = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={typeBtn}
      className={['defaultButton', `${btnStyle}`, `${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
