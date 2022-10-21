// Libraries
import React, { FormEvent, useEffect, useState } from 'react';

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
  const [currentPokemon, setCurrentPokemon] = useState<IPokemonProps>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentPath = window.location.pathname;
  const getPokemonId = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  // Get Pokemon data by ID
  useEffect(() => {
    getAPokemon(getPokemonId).then((data) => {
      setCurrentPokemon(data);
    });
  }, []);

  /**
   * Handling button submit and update to DB
   * @param e - form event
   */
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();

    // get new data before update
    const data = {
      name: e.target.name.value,
      code: e.target.code.value,
      photo: e.target.photo.value,
      element: e.target.element.value,
      type2: e.target.type.value,
      description: e.target.description.value,
    };

    // Call update from pokemonApis
    await updatePokemon(getPokemonId, data);
    window.history.go(-1);
  };

  return (
    <Layout>
      <div className='bodyHome'>
        <Board isLoading={isLoading}>
          <Link className='linkTextHomePage' href={`/detail/${getPokemonId}`}>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            id={getPokemonId}
            formTitle='Edit Pokemon'
            onFormSubmit={handleOnSubmit}
            isEdit={true}
            defaultPokemonData={currentPokemon}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Edit;
