// Libraries
import { FormEvent, useState } from 'react';

// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Models
import { IPokemonProps } from '@models/pokemon';

// Api
import { addPokemon } from '../../apis/pokemonApi';

const Add = () => {
  const [dataInput, setDataInput] = useState<IPokemonProps>({});

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

    addPokemon(data);
    window.history.go(-1);
  };

  return (
    <Layout>
      <div className='bodyHome'>
        <Board>
          <Link className='linkTextHomePage' href='/'>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            defaultPokemonData={dataInput}
            formTitle='Add New Pokemon'
            onFormSubmit={handleOnSubmit}
            isEdit={false}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Add;
