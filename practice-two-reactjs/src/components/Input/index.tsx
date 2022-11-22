// Libraries
import { Input, Box, Text } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

interface IProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  type?: string;
  error?: boolean;
  width?: string;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  margin?: string;
}

const InputComponent: React.FC<IProps> = ({
  defaultValue = '',
  name,
  placeholder = '',
  isDisabled = false,
  type,
  error = false,
  errorText,
  onChange,
  margin,
  width,
}) => (
  <>
    <Input
      name={name}
      isInvalid={error}
      defaultValue={defaultValue}
      placeholder={placeholder}
      isDisabled={isDisabled}
      errorBorderColor='crimson'
      type={type}
      size='sm'
      onChange={onChange}
      margin={margin}
      w={width}
    />
    {error && (
      <Box display='flex' alignItems='flex-start' marginTop='10px' color='crimson'>
        <Text as='sub'>{errorText}</Text>
      </Box>
    )}
  </>
);

export default InputComponent;
