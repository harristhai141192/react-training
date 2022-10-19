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
  elementData: string;
  isEdit?: boolean;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  listOption: IListOptionProps[];
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<IProps> = ({
  name,
  elementData,
  isEdit = false,
  isDisabled = false,
  labelName = '',
  required = true,
  listOption,
  onChange,
}) => {
  const generateKey = (item: string) => `${item}_${new Date().getTime()}_${Math.random()}}`;
  return (
    <>
      <label className='selectInput'>
        <div className='labelInput'>
          {labelName}
          {required && <span className='labelRequired'>*</span>}
        </div>
      </label>
      <select name={name} className='selectValueInput' disabled={isDisabled}>
        {!isEdit ? (
          <option value='DEFAULT' disabled hidden>
            Choose here
          </option>
        ) : (
          <option value='DEFAULT' disabled hidden>
            {elementData}
          </option>
        )}

        {listOption.map((item) => {
          return (
            <option value={item.value} key={generateKey(item.name)}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Select;
