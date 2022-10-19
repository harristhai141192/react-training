// Libraries
import React, { FormEvent } from 'react';

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
  defaultPokemonData: IPokemonProps;
  formTitle?: string;
  isEdit?: boolean;
  id?: string;
  onFormSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: React.FC<IProps> = ({ formTitle, defaultPokemonData, isEdit, id, onFormSubmit }) => {
  return (
    <>
      <h3 className='formTitle'>{formTitle}</h3>
      <form onSubmit={onFormSubmit}>
        <Input
          defaultValue={defaultPokemonData.name}
          name='name'
          type='text'
          labelName='Pokemon Name'
          error={false}
          required={true}
        />
        <Input
          defaultValue={defaultPokemonData.code}
          name='code'
          labelName='Pokemon Number'
          type='number'
          error={false}
          required={true}
        />
        <Input
          defaultValue={defaultPokemonData.photo}
          name='photo'
          labelName='Picture'
          type='text'
          error={false}
        />
        <Select
          isEdit={isEdit}
          listOption={POKEMON_ELEMENTS}
          name='element'
          labelName='Element'
          required={true}
          elementData={defaultPokemonData.element || ''}
        />
        <Select
          isEdit={isEdit}
          listOption={POKEMON_TYPE}
          name='type'
          labelName='Type'
          required={true}
          elementData={defaultPokemonData.type1 || ''}
        />
        <TextField
          defaultValue={defaultPokemonData.description}
          labelName='pokemonDescription'
          name='description'
          rows={2}
        />
        <Button type='submit' style='primary' size='large' label='Save' />
        <Link href={isEdit ? `/detail/${id}` : '/'}>
          <Button style='outlined' size='large' label='Cancel' type='button' />
        </Link>
      </form>
    </>
  );
};

export default Form;
