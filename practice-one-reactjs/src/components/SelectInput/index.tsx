// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface ISelectInputProps {
  name?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  children?: React.ReactNode;
  onChange: () => void;
}

const SelectInput: React.FC<ISelectInputProps> = ({
  name,
  isDisabled = false,
  labelName = '',
  required = true,
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
      <select name={name} className='valueInput' onChange={onChange} disabled={isDisabled}>
        {children}
      </select>
    </>
  );
};

export default SelectInput;
