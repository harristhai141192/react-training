// Libraries
import { Input as InputChakra } from '@chakra-ui/react';
import React, { ChangeEvent } from 'react';

// CSS
import './index.styles.css';

interface IProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  isDisabled?: boolean;
  labelName: string;
  type?: string;
  error: boolean;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  defaultValue = '',
  placeholder = '',
  isDisabled = false,
  labelName = '',
  type,
  error = false,
  errorText,
  onChange,
}) => (
  <>
    <label className='labelInput'>{labelName}</label>
    <InputChakra
      isInvalid={error}
      defaultValue={defaultValue}
      placeholder={placeholder}
      isDisabled={isDisabled}
      errorBorderColor='crimson'
      type={type}
      size={'md'}
      onChange={onChange}
    />
    {error && <span className='errorText'>{errorText}</span>}
  </>
);

export default Input;
