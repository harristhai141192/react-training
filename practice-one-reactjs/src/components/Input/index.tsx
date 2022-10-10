// Libraries
import React, { ChangeEvent } from 'react';

// CSS
import './index.styles.css';
import { isError } from 'lodash';

interface IInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  type?: string;
  error: boolean;
  errorText?: string;
  onChange: () => void;
}

const Input: React.FC<IInputProps> = ({
  value,
  name,
  placeholder,
  isDisabled = false,
  labelName = '',
  type,
  required = false,
  error = false,
  errorText,
  onChange = () => {},
}) => {
  return (
    <>
      <label className='input'>
        <div className='labelInput'>
          {labelName}
          {required && <span className='labelRequired'>*</span>}
        </div>
      </label>
      {!error ? (
        <input
          name={name}
          className='valueInput'
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
        />
      ) : (
        <input
          name={name}
          className='valueInputError'
          type={type}
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
        />
      )}
      {error && <span className='errorText'>{errorText}</span>}
    </>
  );
};

export default Input;
