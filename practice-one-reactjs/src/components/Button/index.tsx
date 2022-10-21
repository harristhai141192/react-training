import React from 'react';
import './index.styles.css';

interface IProps {
  type?: 'submit' | 'button' | 'reset';
  style?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button = ({
  type,
  style = 'primary',
  size = 'medium',
  backgroundColor,
  label,
  className,
  onClick,
  ...props
}: IProps) => (
  <button
    type={type}
    className={['defaultButton', `${style}`, `${size}`, `${className}`].join(' ')}
    style={{ backgroundColor }}
    onClick={onClick}
    {...props}
  >
    {label}
  </button>
);

export default Button;
