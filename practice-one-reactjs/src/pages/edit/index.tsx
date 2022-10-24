// Libraries
import React, { FormEvent, useEffect, useState, useContext } from 'react';

// Router
import { RoutingContext } from '@router/Router';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '../../Layout';
import Board from '@components/Board';

// Models
import { IPokemonProps } from '@models/pokemon';

// Api
import { getAPokemon, updatePokemon } from '@apis/pokemonApi';

const Edit = () => {
  const { params } = useContext(RoutingContext);
  const [currentPokemon, setCurrentPokemon] = useState<IPokemonProps>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get Pokemon data by ID
  useEffect(() => {
    setIsLoading(true);

    getAPokemon(params.id).then((data) => {
      setCurrentPokemon(data);
      setIsLoading(false);
    });
  }, []);

  /**
   * Handling button submit and update to DB
   * @param e - form event
   */
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    // Prevent default browser action
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

    const response = await fetch(`${params}` + params.id);
    // Call update from pokemonApis
    if (response.ok) {
      await updatePokemon(params.id, data);
      window.history.pushState({}, '', '/');
      const pathEvent = new PopStateEvent('popstate');
      window.dispatchEvent(pathEvent);
    }
  };

  return (
    <Layout>
      <div className='bodyHome'>
        <Board isLoading={isLoading}>
          <Link className='linkTextHomePage' href={`/detail/${params.id}`}>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            id={params.id}
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
