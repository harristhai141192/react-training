// Libraries
import { FormEvent, useState } from 'react';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Api
import { addPokemon } from '@apis/pokemonApi';

const Add = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // Send data to DB when submit
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      code: e.target.code.value,
      photo: e.target.photo.value,
      element: e.target.element.value,
      type2: e.target.type.value,
      description: e.target.description.value,
    };
    await addPokemon(data);
    window.history.go(-1);
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
