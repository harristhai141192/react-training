// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface ISelectProps {
  name?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  children?: React.ReactNode;
  onChange: () => void;
}

const Select: React.FC<ISelectProps> = ({
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

export default Select;
