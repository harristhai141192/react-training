// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IProps {
  name?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  children?: React.ReactNode;
  onChange: () => void;
}

const Select: React.FC<IProps> = ({
  name,
  isDisabled = false,
  labelName = '',
  required = true,
  children,
  onChange = () => {},
}) => {
  return (
    <>
      <label className='selectInput'>
        <div className='labelInput'>
          {labelName}
          {required && <span className='labelRequired'>*</span>}
        </div>
      </label>
      <select name={name} className='selectValueInput' onChange={onChange} disabled={isDisabled}>
        {children}
      </select>
    </>
  );
};

export default Select;
