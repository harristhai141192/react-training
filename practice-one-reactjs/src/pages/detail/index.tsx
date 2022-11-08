// Libraries
import { useState, useEffect, useContext, useCallback } from 'react';

// Router
import { RoutingContext, navigate } from '@router/Router';

// Components
import Link from '@components/Link';
import Image from '@components/Image';
import Layout from '../../layouts';
import Board from '@components/Board';
import Button from '@components/Button';
import Modal from '@components/Modal';

// CSS
import './index.styles.css';

// Models
import { IPokemonProps } from '@models/pokemon';

// Apis
import { deletePokemon, getAPokemon } from '@apis/pokemonApi';

const Detail = () => {
  const { params } = useContext(RoutingContext);
  const [currentPokemon, setCurrentPokemon] = useState<IPokemonProps>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);

    getAPokemon(params.id).then(async (data) => {
      if (typeof data == 'string') {
        navigate(`/error`);
      } else {
        setCurrentPokemon(data);
        setIsLoading(false);
      }
    });
  }, []);

  // Handle delete a Pokemon with confirmation alert
  const handleDeleteItem = useCallback(async () => {
    setIsLoading(true);

    const response = await fetch(`${params}` + params.id);

    if (response.ok) {
      // Delete pokemon and rotate back to the previous page
      await deletePokemon(params.id);
      navigate('/');
    }
  }, []);

  return (
    <Layout>
      <div className='bodyHome'>
        <Board isLoading={isLoading}>
          <div className='pokemonDetail'>
            <div className='imagePokemonDetail'>
              <Image source={currentPokemon.photo} alt={currentPokemon.name} width='250px' />
            </div>
            <div className='pokemonDetailNav'>
              <div className='pokemonDetailTitle'>
                <h2 className='pokemonDetailName'>{currentPokemon.name}</h2>
                <div className='pokemonDetailBtn'>
                  <Link href={`/edit/${params.id}`}>
                    <Button label={'Edit Pokemon'} />
                  </Link>
                  <Modal
                    buttonModalName={'Delete Pokemon'}
                    titleMessage={'Delete Pokemon'}
                    mainMessage={'Are you sure you want to delete this Pokemon?'}
                    onClickConfirm={handleDeleteItem}
                  />
                </div>
              </div>
              <div className='pokemonType'>
                <p className='typeElement'>{currentPokemon.element}</p>
                <p className='type2'>{currentPokemon.type2}</p>
              </div>
              <div className='pokemonDetailDescription'>
                {currentPokemon.description}
                <br />
              </div>
              <Link className='linkBack' href='/'>
                <p className='textBack'>&lArr; Back to Pokedex</p>
              </Link>
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
                <Button label='Delete' style='primary' />
              </div>
            </div>
          </div>
        </Board>
      </div>
    </Layout>
  );
};

export default Detail;
