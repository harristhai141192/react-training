// Libraries
import { FormEvent, useState, useContext } from 'react';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '../../Layout';
import Board from '@components/Board';

// Router
import { RoutingContext } from '@router/Router';

// Api
import { addPokemon } from '@apis/pokemonApi';

const Add = () => {
  const { params } = useContext(RoutingContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Send data to DB when submit
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);

    // Prevent default browser action
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      code: e.target.code.value,
      photo: e.target.photo.value,
      element: e.target.element.value,
      type2: e.target.type.value,
      description: e.target.description.value,
    };

    const response = await fetch(`${params}` + params.id);
    // Call add from pokemonApis
    if (response.ok) {
      await addPokemon(data);
      window.history.pushState({}, '', '/');
      const pathEvent = new PopStateEvent('popstate');
      window.dispatchEvent(pathEvent);
    }
  };

  return (
    <Layout>
      <div className='bodyHome'>
        <Board isLoading={isLoading}>
          <Link className='linkTextHomePage' href='/'>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form formTitle='Add New Pokemon' onFormSubmit={handleOnSubmit} isEdit={false} />
        </Board>
      </div>
    </Layout>
  );
};

export default Add;
