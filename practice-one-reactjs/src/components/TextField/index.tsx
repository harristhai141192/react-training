// Libarries
import { ChangeEvent } from 'react';

// CSS
import './index.styles.css';

export interface IProps {
  name: string;
  value?: string;
  defaultValue?: string;
  labelName?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  cols?: number;
  maxlength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextField = ({
  name = 'textarea-input',
  value,
  defaultValue,
  labelName = '',
  placeholder = 'Enter something',
  disabled = false,
  required,
  rows = 5,
  cols = 50,
  maxlength,
  onChange,
}: IProps) => (
  <>
    <label className='textAreaLabel'>
      <div className='textAreaDescription'>
        {labelName}
        {required && <span className='labelRequired'>*</span>}
      </div>
    </label>
    <textarea
      defaultValue={defaultValue}
      className='textAreaInput'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      cols={cols}
      maxLength={maxlength}
      disabled={disabled}
    />
  </>
);

export default TextField;
