// Libraries
import React, { ChangeEvent } from 'react';

// CSS
import './index.styles.css';

interface IListOptionProps {
  value: string;
  name: string;
}

interface IProps {
  name?: string;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  listOption: IListOptionProps[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<IProps> = ({
  name,
  isDisabled = false,
  labelName = '',
  required = true,
  listOption,
  onChange,
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
        {listOption.map((item) => {
          return (
            <option value={item.value} key={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
