// Libraries
import { Text, Textarea } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

interface IProps {
  name?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: boolean;
  size?: string;
  errorText?: string;
}

const TextField: React.FC<IProps> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  size,
  errorText,
}) => {
  return (
    <>
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        isInvalid={error}
        size={size}
      />
      {error && (
        <Text as='sub' color='crimson'>
          {errorText}
        </Text>
      )}
    </>
  );
};

export default TextField;
