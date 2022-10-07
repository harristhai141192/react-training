import React from 'react';
import './index.styles.css';

interface ButtonProps {
  type?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const Button = ({
  type = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type='button'
      className={['defaultButton', `${type}`, `${size}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
