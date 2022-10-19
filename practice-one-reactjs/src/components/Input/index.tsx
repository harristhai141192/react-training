// Libraries
import React, { ChangeEvent } from 'react';

// CSS
import './index.styles.css';

interface IProps {
  value?: string;
  defaultValue?: string;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  type?: string;
  error: boolean;
  errorText?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({
  defaultValue = '',
  name = '',
  placeholder = '',
  isDisabled = false,
  labelName = '',
  type,
  required = false,
  error = false,
  errorText,
  onChange,
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
          defaultValue={defaultValue}
          name={name}
          className='valueInput'
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          onChange={onChange}
        />
      ) : (
        <input
          defaultValue={defaultValue}
          name={name}
          className='valueInputError'
          type={type}
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
