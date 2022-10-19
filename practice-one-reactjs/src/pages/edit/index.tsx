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

  const currentPath = window.location.pathname;
  const getPathId = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  // Get data a pokemon
  useEffect(() => {
    getAPokemon(getPathId).then((data) => {
      setCurrentPokemon(data);
    });
  }, []);

  // Send data to DB when submit
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      code: e.target.code.value,
      photo: e.target.photo.value,
      element: e.target.element.value,
      type2: e.target.type.value,
      description: e.target.description.value,
    };

    updatePokemon(getPathId, data);
    window.history.go(-1);
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
