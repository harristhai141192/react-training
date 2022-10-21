// Libraries
import { useEffect, useState } from 'react';

// Components
import Link from '@components/Link';
import Card from '@components/Card';
import Layout from '@components/Layout';
import Board from '@components/Board';

// Models
import { IPokemonProps } from '@models/pokemon';

// Api
import { getPokemons } from '@apis/pokemonApi';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonProps[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

  const addPokemonLinkPage = (
    <Link className='linkToAddPage' href='/add'>
      <p className='linkTextAddPage'>+ Add New Pokemon</p>
    </Link>
  );

  useEffect(() => {
    async function getList() {
      const pokemonList = await getPokemons();

      setPokemonList(pokemonList);
      setIsLoading(false);
    }
    getList();
  }, []);

  const cardItem = (
    // Get all the item in mock data file
    <>
      {pokemonList?.map((item) => (
        <Link key={generateKey(item.code)} href={`/detail/${item.id}`} className='toDetail'>
          <Card card={item} />
        </Link>
      ))}
    </>
  );

  return (
    <Layout>
      <div className='bodyHome'>
        <Board
          isLoading={isLoading}
          title='Pokedex'
          addButton={addPokemonLinkPage}
          cardItem={cardItem}
        />
      </div>
    </Layout>
  );
};

export default Home;
