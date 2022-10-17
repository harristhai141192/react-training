// Libraries
import React from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/SelectInput';
import TextField from '@components/TextField';

// CSS
import './index.styles.css';

interface IProps {
  formTitle: string;
  type1Children?: React.ReactNode;
  type2Children?: React.ReactNode;
  onFormSubmit?: () => void;
  onFormCancel?: () => void;
  children?: React.ReactNode;
}

const Form: React.FC<IProps> = ({
  formTitle = '',
  type1Children = <></>,
  type2Children = <></>,
  onFormSubmit,
  onFormCancel,
}) => {
  return (
    <>
      <h3 className='formTitle'>{formTitle}</h3>
      {/* TODO: Handle On Change Btn for btn inside form component */}
      <form>
        <Input labelName='Pokemon Name' error={false} required={true} onChange={() => {}} />
        <Input
          labelName='Pokemon Number'
          type='number'
          error={false}
          required={true}
          onChange={() => {}}
        />
        <Input labelName='Picture' type='file' error={false} onChange={() => {}} />
        <Select labelName='Type 1' required={true} onChange={() => {}}>
          {type1Children}
        </Select>
        <Select labelName='Type 2' required={true} onChange={() => {}}>
          {type2Children}
        </Select>
        <TextField
          labelName='Description'
          name='addPokemonDescription'
          onChange={() => {}}
          rows={2}
        />
        <Button type='submit' style='primary' size='large' label='Save' onClick={onFormSubmit} />
        <Button style='outlined' size='large' label='Cancel' onClick={onFormCancel} />
      </form>
    </>
  );
};

export default Form;
