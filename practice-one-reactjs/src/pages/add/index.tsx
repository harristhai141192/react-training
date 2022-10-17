// Components
import Link from '@components/Link';
import Form from '@components/Form';
import Layout from '@components/Layout';
import Board from '@components/Board';
import { IPokemonProps, Pokemon } from '@models/pokemon';
import { ChangeEvent, FormEvent, useState } from 'react';

const Add = () => {
  const [dataInput, setDataInput] = useState<IPokemonProps>({});

  const handleOnChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValues = { [e.target.name]: e.target.value };
    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  const handleOnChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const inputValues = { [e.target.name]: e.target.value };
    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  const handleOnChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValues = { [e.target.name]: e.target.value };
    setDataInput((pre) => {
      return {
        ...pre,
        ...inputValues,
      };
    });
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('dataInput', dataInput);
  };
  return (
    <Layout>
      <div className='bodyHome'>
        <Board>
          <Link className='linkTextHomePage' href='/'>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form
            formData={dataInput}
            handleOnChange={handleOnChangeInput}
            formTitle='Add New Pokemon'
            onFormSubmit={handleOnSubmit}
            handleOnChangeSelect={handleOnChangeSelect}
            handleOnChangeTextArea={handleOnChangeTextArea}
          />
        </Board>
      </div>
    </Layout>
  );
};

export default Add;
