// Libraries
import React from 'react';

// CSS
import './index.styles.css';

interface IProps {
  name?: string;
  elementData: string;
  isEdit?: boolean;
  isDisabled?: boolean;
  labelName: string;
  required?: boolean;
  listOption: string[];
}

const Select: React.FC<IProps> = ({
  name,
  elementData,
  isEdit = false,
  isDisabled = false,
  labelName = '',
  required = true,
  listOption,
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
          <option selected={elementData === 'DEFAULT'} value='DEFAULT' disabled hidden></option>
        ) : (
          <option selected={elementData === 'DEFAULT'} value='DEFAULT' disabled hidden>
            {elementData}
          </option>
        )}
        {listOption.length ? (
          listOption.map((item) => {
            return (
              <option selected={elementData === item} value={item} key={generateKey(item)}>
                {item}
              </option>
            );
          })
        ) : (
          <option value='DEFAULT' disabled hidden>
            NO DATA
          </option>
        )}
      </select>
    </>
  );
};

export default Select;
