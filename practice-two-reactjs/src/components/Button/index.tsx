// Libraries
import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';
interface IProps {
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  colorScheme?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  label?: string;
  loadingText?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  className?: string;
  leftIcon?: React.ReactElement;
  name?: string;
  children?: React.ReactNode;
  marginBottom?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
  marginRight?: string;
}

const Button = ({
  variant = 'solid',
  size = 'md',
  leftIcon,
  colorScheme,
  label,
  loadingText = '',
  isLoading,
  isDisabled,
  marginBottom,
  onClick,
  width,
  marginRight = '10px',
  ...props
}: IProps) => (
  <ButtonChakra
    marginRight={marginRight}
    size={size}
    leftIcon={leftIcon}
    colorScheme={colorScheme}
    variant={variant}
    loadingText={loadingText}
    isDisabled={isDisabled}
    isLoading={isLoading}
    onClick={onClick}
    marginBottom={marginBottom}
    w={width}
    {...props}
  >
    {label}
  </ButtonChakra>
);

export default Button;
