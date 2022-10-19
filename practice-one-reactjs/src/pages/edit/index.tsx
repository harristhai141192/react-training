// Libraries
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Models
import { IPokemonProps } from '../../models/pokemon';

// Api
import { getAPokemon, updatePokemon } from '../../apis/pokemonApi';

const Edit = () => {
  const [dataInput, setDataInput] = useState<IPokemonProps>({});
  const [currentPokemon, setCurrentPokemon] = useState<IPokemonProps>({});
  console.log('currentPokemon: ', currentPokemon);

  const currentPath = window.location.pathname;
  const getPathId = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  // Get data a pokemon
  useEffect(() => {
    getAPokemon(getPathId).then((data) => {
      setCurrentPokemon(data);
    });
  }, []);

  // Handle Change for input component
  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValues = { [e.target.name]: e.target.value };

    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  // Handle Change for select component
  const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const inputValues = { [e.target.name]: e.target.value };

    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  // Handle Change for text area
  const handleOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValues = { [e.target.name]: e.target.value };

    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  // Send data to DB when submit
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    updatePokemon(getPathId, dataInput);
    console.log('currentPokemon POKEMON:', currentPokemon);

    e.preventDefault();
  };

  return (
    <Layout>
      <div className='bodyHome'>
        <Board>
          <Link className='linkTextHomePage' href={`/detail/${getPathId}`}>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            id={getPathId}
            pokemonData={dataInput}
            handleOnChange={handleOnChangeInput}
            formTitle='Edit Pokemon'
            onFormSubmit={handleOnSubmit}
            handleOnChangeSelect={handleOnChangeSelect}
            handleOnChangeTextArea={handleOnChangeTextArea}
            isEdit={true}
            defaultPokemonData={currentPokemon}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Edit;
