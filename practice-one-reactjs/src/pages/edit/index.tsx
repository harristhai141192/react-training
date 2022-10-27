// Libraries
import { FormEvent, useEffect, useState, useContext, useCallback } from 'react';

// Router
import { RoutingContext, navigate } from '@router/Router';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '../../layouts';
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
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    // Prevent default browser action
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch(`${params}` + params.id);

    if (response.ok) {
      const formElements = e.target as HTMLFormElement;

      // Call update from pokemonApis
      await updatePokemon(params.id, {
        name: (formElements[0] as HTMLInputElement).value,
        code: (formElements[1] as HTMLInputElement).value,
        photo: (formElements[2] as HTMLInputElement).value,
        element: (formElements[3] as HTMLSelectElement).value,
        type2: (formElements[4] as HTMLSelectElement).value,
        description: (formElements[5] as HTMLInputElement).value,
      });

      // Navigate to homepage
      navigate(`/detail/${params.id}`);
    }
  }, []);

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
            onSubmit={handleSubmit}
            isEdit={true}
            defaultPokemonData={currentPokemon}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Edit;
