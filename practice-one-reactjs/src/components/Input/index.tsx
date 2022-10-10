// Libraries
import React, { ChangeEvent } from 'react';

// CSS
import './index.styles.css';

interface IInputProps {
  value?: string;
  name?: string;
  placeholder?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  type?: string;
  selectInput: boolean;
  children?: React.ReactNode;
  onChange: () => void;
}

const Input: React.FC<IInputProps> = ({
  value,
  name,
  placeholder,
  isDisabled = false,
  labelName = '',
  type,
  required = true,
  selectInput = false,
  children,
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

      {!selectInput ? (
        // eslint-disable-next-line no-constant-condition
        ({ type } = 'file' ? (
          <input
            name={name}
            className='valueInput'
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
            required
            multiple
            accept='image/*'
          />
        ) : (
          <input
            name={name}
            className='valueInput'
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
            required
          />
        ))
      ) : (
        <select name={name} className='valueInput'>
          {children}
        </select>
      )}
    </>
  );
};

export default Input;
