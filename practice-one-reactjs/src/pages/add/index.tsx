// Libraries
import { FormEvent, useState, useContext, useCallback } from 'react';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '../../layouts';
import Board from '@components/Board';

// Router
import { RoutingContext, navigate } from '@router/Router';

// Api
import { addPokemon } from '@apis/pokemonApi';

// Utils
import { pokemonNameValidate, pokemonNumberValidate } from '../../utils/validator';

const Add = () => {
  const { params } = useContext(RoutingContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isCodeError, setIsCodeError] = useState<boolean>(false);

  // Send data to DB when submit
  const handleSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    // Prevent default browser action
    e.preventDefault();
    const formElements = e.target as HTMLFormElement;

    setIsLoading(true);
    const response = await fetch(`${params}` + params.id);
    if (
      !pokemonNameValidate((formElements[0] as HTMLInputElement).value) &&
      !pokemonNumberValidate((formElements[1] as HTMLInputElement).value) &&
      response.ok
    ) {
      // Call add from pokemonApis
      await addPokemon({
        name: (formElements[0] as HTMLInputElement).value,
        code: (formElements[1] as HTMLInputElement).value,
        photo: (formElements[2] as HTMLInputElement).value,
        element: (formElements[3] as HTMLSelectElement).value,
        type2: (formElements[4] as HTMLSelectElement).value,
        description: (formElements[5] as HTMLInputElement).value,
      });

      // Navigate to homepage
      navigate('/');
    } else {
      setIsNameError(true);
      setIsCodeError(true);
      setIsLoading(false);
    }
  }, []);

  return (
    <Layout>
      <div className='bodyHome'>
        <Board isLoading={isLoading}>
          <Link className='linkTextHomePage' href='/'>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            formTitle='Add New Pokemon'
            errorCode={isCodeError}
            errorName={isNameError}
            onSubmit={handleSubmit}
            isEdit={false}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Add;
