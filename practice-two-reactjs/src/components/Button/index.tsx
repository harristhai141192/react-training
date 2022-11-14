// Libraries
import React from 'react';
import { Button as ButtonChakra } from '@chakra-ui/react';

interface IProps {
  variant?: 'ghost' | 'outline' | 'solid' | 'link' | 'unstyled';
  colorScheme?: string;
  size?: 'default' | 'xs' | 'sm' | 'md' | 'lg';
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
  padding?: string;
}

const Button = ({
  variant = 'solid',
  size = 'default',
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
  padding,
  ...props
}: IProps) => (
  <ButtonChakra
    p={padding}
    fontSize={{
      sm: 'text.small',
      md: 'text.extraSmall',
      lg: 'text.extraSmall',
      xl: 'text.small',
    }}
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
