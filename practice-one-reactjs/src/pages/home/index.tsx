// Components
import Link from '@components/Link';
import Card from '@components/Card';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Mockdata
import tableData from '@mocks/tableData';
import { getPokemons } from '../../apis/pokemonApi';
import { useEffect, useState } from 'react';
import { Pokemon } from '@models/pokemon';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>();
  const generateKey = (item: string) => `${item}_${new Date().getTime()}`;

  const addPokemonLinkPage = (
    <Link className='linkToAddPage' href='/add'>
      <p className='linkTextAddPage'>+ Add New Pokemon</p>
    </Link>
  );

  useEffect(() => {
    async function getList() {
      const pokemonList = await getPokemons();
      setPokemonList(pokemonList);
    }

    getList();
  }, []);

  const cardItem = (
    // Get all the item in mock data file
    <>
      {pokemonList?.map((item) => (
        <Link key={generateKey(item.code)} href='/detail' className='toDetail'>
          <Card card={item} />
        </Link>
      ))}
    </>
  );

  return (
    <Layout>
      <div className='bodyHome'>
        <Board title='Pokedex' addButton={addPokemonLinkPage} cardItem={cardItem} />
      </div>
    </Layout>
  );
};

export default Home;
