// Libraries
import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';
interface IProps {
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  colorScheme?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  loadingText?: string;
  isDisabled?: boolean;
  className?: string;
  leftIcon?: React.ReactElement;
  name?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  variant = 'solid',
  size = 'md',
  leftIcon,
  colorScheme,
  label,
  loadingText = '',
  isDisabled,
  onClick,
  ...props
}: IProps) => (
  <ButtonChakra
    size={size}
    leftIcon={leftIcon}
    colorScheme={colorScheme}
    variant={variant}
    loadingText={loadingText}
    isDisabled={isDisabled}
    onClick={onClick}
    {...props}
  >
    {label}
  </ButtonChakra>
);

export default Button;
