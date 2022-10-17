// Libraries
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/SelectInput';
import TextField from '@components/TextField';
import { IPokemonProps } from '@models/pokemon';
import { POKEMON_TYPE1, POKEMON_TYPE2 } from '@constants/variables';

// CSS
import './index.styles.css';

interface IProps {
  formData: IPokemonProps;
  formTitle?: string;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFormCancel?: () => void;
}

const Form: React.FC<IProps> = ({
  formTitle,
  formData,
  onFormSubmit,
  onFormCancel,
  handleOnChange,
  handleOnChangeSelect,
  handleOnChangeTextArea,
}) => {
  return (
    <>
      <h3 className='formTitle'>{formTitle}</h3>
      {/* TODO: Handle On Change Btn for btn inside form component */}
      <form onSubmit={onFormSubmit}>
        <Input
          name='pokemonName'
          value={formData.name}
          labelName='Pokemon Name'
          error={false}
          required={true}
          onChange={handleOnChange}
        />
        <Input
          value={formData.code}
          name='pokemonNumber'
          labelName='Pokemon Number'
          type='number'
          error={false}
          required={true}
          onChange={handleOnChange}
        />
        <Input
          value={formData.photo}
          name='pokemonPhoto'
          labelName='Picture'
          type='file'
          error={false}
          onChange={handleOnChange}
        />
        <Select
          listOption={POKEMON_TYPE1}
          name='pokemonType1'
          labelName='Type 1'
          required={true}
          onChange={handleOnChangeSelect}
        />
        <Select
          listOption={POKEMON_TYPE2}
          name='pokemonType2'
          labelName='Type 2'
          required={true}
          onChange={handleOnChangeSelect}
        />
        <TextField
          value={formData.description}
          labelName='Description'
          name='pokemonDescription'
          onChange={handleOnChangeTextArea}
          rows={2}
        />
        <Button type='submit' style='primary' size='large' label='Save' />
        <Button style='outlined' size='large' label='Cancel' onClick={onFormCancel} />
      </form>
    </>
  );
};

export default Form;
