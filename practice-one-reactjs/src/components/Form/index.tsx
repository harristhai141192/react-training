// Libraries
import React, { ChangeEvent, FormEvent, useState } from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/SelectInput';
import TextField from '@components/TextField';
import { IPokemonProps } from '@models/pokemon';
import { POKEMON_ELEMENTS, POKEMON_TYPE } from '@constants/variables';

// CSS
import './index.styles.css';
import Link from '@components/Link';

interface IProps {
  pokemonData: IPokemonProps;
  formTitle?: string;
  isEdit?: boolean;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnChangeSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleOnChangeTextArea: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onFormCancel?: () => void;
}

const Form: React.FC<IProps> = ({
  formTitle,
  pokemonData,
  isEdit,
  onFormSubmit,
  handleOnChange,
  handleOnChangeSelect,
  handleOnChangeTextArea,
}) => {
  return (
    <>
      <h3 className='formTitle'>{formTitle}</h3>
      <form onSubmit={onFormSubmit}>
        <Input
          name='name'
          value={pokemonData.name || ''}
          labelName='Pokemon Name'
          error={false}
          required={true}
          onChange={handleOnChange}
        />
        <Input
          value={pokemonData.code || ''}
          name='code'
          labelName='Pokemon Number'
          type='number'
          error={false}
          required={true}
          onChange={handleOnChange}
        />
        <Input
          value={pokemonData.photo || ''}
          name='photo'
          labelName='Picture'
          type='text'
          error={false}
          onChange={handleOnChange}
        />
        <Select
          listOption={POKEMON_ELEMENTS}
          name='element'
          labelName='Type 1'
          required={true}
          onChange={handleOnChangeSelect}
        />
        <Select
          listOption={POKEMON_TYPE}
          name='type2'
          labelName='Type 2'
          required={true}
          onChange={handleOnChangeSelect}
        />
        <TextField
          value={pokemonData.description}
          labelName='pokemonDescription'
          name='description'
          onChange={handleOnChangeTextArea}
          rows={2}
        />
        <Button type='submit' style='primary' size='large' label='Save' />
        <Link href={isEdit ? '/edit' : '/'}>
          <Button style='outlined' size='large' label='Cancel' type='button' />
        </Link>
      </form>
    </>
  );
};

export default Form;
