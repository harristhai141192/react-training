// Libraries
import { useCallback, useEffect, useState } from 'react';

// Components
import Link from '@components/Link';
import Card from '@components/Card';
import Layout from '../../layouts';
import Board from '@components/Board';

// Models
import { IPokemonProps } from '@models/pokemon';

// Api
import { getPokemons, getPokemonsWithElement } from '@apis/pokemonApi';

const Home = () => {
  const [pokemonList, setPokemonList] = useState<IPokemonProps[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Generate key for mapping pokemon List
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

  // Route to page Add when on click to Add New Pokemon
  const addPokemonLinkPage = (
    <Link className='linkToAddPage' href='/add'>
      <p className='linkTextAddPage'>+ Add New Pokemon</p>
    </Link>
  );

  // Get pokemon list and render it one time when the page load with useEffect
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

  // Handle click filter following the element
  const handleOnClick = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault();

    if (e.target.name == 'All') {
      setIsLoading(true);
      setPokemonList(await getPokemons());
    } else {
      setIsLoading(true);

      setPokemonList(await getPokemonsWithElement(e.target.name));
    }
    setIsLoading(false);
  }, []);

  return (
    <Layout onClick={handleOnClick}>
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
