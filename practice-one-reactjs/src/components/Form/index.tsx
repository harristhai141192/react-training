// Libraries
import React from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/SelectInput';
import TextField from '@components/TextField';

// CSS
import './index.styles.css';

interface IFormProps {
  formTitle: string;
  type1Children: React.ReactNode;
  type2Children?: React.ReactNode;
}

const Form: React.FC<IFormProps> = ({
  formTitle = '',
  type1Children = <></>,
  type2Children = <></>,
}) => {
  return (
    <>
      <h3 className='formTitle'>{formTitle}</h3>
      <form>
        <Input labelName={'Pokemon Name'} error={false} required={true} onChange={() => {}} />
        <Input
          labelName={'Pokemon Number'}
          type='number'
          error={false}
          required={true}
          onChange={() => {}}
        />
        <Input labelName={'Picture'} type='file' error={false} onChange={() => {}} />
        <Select labelName={'Type 1'} required={true} onChange={() => {}}>
          {type1Children}
        </Select>
        <Select labelName={'Type 2'} required={true} onChange={() => {}}>
          {type2Children}
        </Select>
        <TextField labelName='Description' name={'addPokemonDescription'} onChange={() => {}} />
        <Button type='primary' size='large' label={'Create'} />
        <Button type='outlined' size='large' label={'Cancel'} />
      </form>
    </>
  );
};

export default Form;
