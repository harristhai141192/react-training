// Libraries
import React, { useState, useEffect } from 'react';

// Components
import Link from '@components/Link';
import Image from '@components/Image';
import Layout from '@components/Layout';
import Board from '@components/Board';
import Button from '@components/Button';

// CSS
import './index.styles.css';

// Models
import { IPokemonProps } from '../../models/pokemon';

// Apis
import { getAPokemon } from '../../apis/pokemonApi';

const Detail = () => {
  const currentPath = window.location.pathname;
  const getPathId = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  const [currentPokemon, setCurrentPokemon] = useState<IPokemonProps>({});

  useEffect(() => {
    getAPokemon(getPathId).then((data) => {
      setCurrentPokemon(data);
    });
  }, []);

  return (
    <Layout>
      <div className='bodyHome'>
        <Board>
          <div className='pokemonDetail'>
            <div className='imagePokemonDetail'>
              <Image source={currentPokemon.photo} alt={currentPokemon.name} width='250px' />
            </div>
            <div className='pokemonDetailNav'>
              <div className='pokemonDetailTitle'>
                <h2 className='pokemonDetailName'>{currentPokemon.name}</h2>
                <div className='pokemonDetailBtn'>
                  <Link className='linkTextEditPage' href={`/edit/${getPathId}`}>
                    Edit Pokemon
                  </Link>
                  <Link className='linkTextEditPage'>Delete Pokemon</Link>
                </div>
              </div>
              <div className='pokemonType'>
                <p className='typeElement'>{currentPokemon.element}</p>
                <p className='type2'>{currentPokemon.type2}</p>
              </div>
              <div className='pokemonDetailDescription'>
                {currentPokemon.description}
                <br />
                <Link className='linkBack' href='/'>
                  &lArr; Back to Pokedex
                </Link>
              </div>
            </div>
          </div>
          <div className='pokemonDetailLocation'>
            <div className='locationTitle'>
              <h2 className='locationTitleText'>Spotted Locations</h2>
              <Button className='locationTitleBtn' label='+ Add Location' style='secondary' />
            </div>
            <div className='detailRouteCard'>
              <div className='detailRouteName'>
                <p className='routeNumber'>Route 53</p>
                <p className='routeDate'>2019-01-01</p>
              </div>
              <div className='detailRouteBtn'>
                <Button label='Edit' style='tertiary' />
                <Button label='Delete' style='tertiary' />
              </div>
            </div>
          </div>
        </Board>
      </div>
    </Layout>
  );
};

export default Detail;
