// Libraries
import { ChangeEvent, FormEvent, useState } from 'react';

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

  // // Handle Change for input component
  // const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
  //   const inputValues = { [e.target.name]: e.target.value };

  //   setDataInput((pre) => {
  //     return {
  //       ...pre,
  //       ...inputValues,
  //     };
  //   });
  // };

  // // Handle Change for text area
  // const handleOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   const inputValues = { [e.target.name]: e.target.value };

  //   setDataInput((pre) => {
  //     return {
  //       ...pre,
  //       ...inputValues,
  //     };
  //   });
  // };

  // Send data to DB when submit
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    addPokemon(dataInput);
    e.preventDefault();
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
