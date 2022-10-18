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
  children,
  ...props
}: IProps) => {
  return (
    <button
      type={type}
      className={['defaultButton', `${style}`, `${size}`, `${className}`].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
      {children}
    </button>
  );
};

export default Button;
