// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IProps {
  type?: 'submit' | 'button' | 'reset';
  style?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  className?: string;
  name?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type,
  style = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  className,
  name,
  onClick,
  ...props
}: IProps) => (
  <button
    type={type}
    className={['defaultButton', `${style}`, `${size}`, `${className}`].join(' ')}
    style={{ backgroundColor }}
    name={name}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default Button;
