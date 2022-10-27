// Libraries
import React, { FormEvent } from 'react';

// Components
import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/SelectInput';
import TextField from '@components/TextField';
import Link from '@components/Link';

// Models
import { IPokemonProps } from '@models/pokemon';

// Variables
import { getPokemonElements, getPokemonTypes } from '@constants/variables';

// CSS
import './index.styles.css';

interface IProps {
  defaultPokemonData?: IPokemonProps;
  formTitle?: string;
  isEdit?: boolean;
  id?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  errorName?: boolean;
  errorCode?: boolean;
}

const Form: React.FC<IProps> = ({
  formTitle,
  defaultPokemonData,
  isEdit,
  id,
  onSubmit,
  errorName = false,
  errorCode = false,
}) => (
  <>
    <h3 className='formTitle'>{formTitle}</h3>
    <form onSubmit={onSubmit}>
      <Input
        defaultValue={defaultPokemonData?.name}
        name='name'
        type='text'
        labelName='Pokemon Name'
        error={errorName}
        required={true}
        errorText='Pokemon Name is required'
      />
      <Input
        defaultValue={defaultPokemonData?.code}
        name='code'
        labelName='Pokemon Number'
        type='number'
        error={errorCode}
        required={true}
        errorText='Pokemon Number is required'
      />
      <Input
        defaultValue={defaultPokemonData?.photo}
        name='photo'
        labelName='Picture'
        type='text'
        error={false}
        errorText=''
      />
      <Select
        isEdit={isEdit}
        listOption={getPokemonElements}
        name='element'
        labelName='Element'
        required={true}
        elementData={defaultPokemonData?.element || ''}
      />
      <Select
        isEdit={isEdit}
        listOption={getPokemonTypes}
        name='type'
        labelName='Type'
        required={true}
        elementData={defaultPokemonData?.type2 || ''}
      />
      <TextField
        defaultValue={defaultPokemonData?.description}
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

export default Form;
