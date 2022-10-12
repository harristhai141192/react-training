// Components
import Header from '@components/Header';
import Link from '@components/Link';
import Footer from '@components/Footer';
import Board from '@components/Board';
import Image from '@components/Image';

// Images
import { PokemonLogo, FireDragon } from '@assets/index';

// Mock data
import POKEDEX_ITEM from '@mocks/tableData';

// CSS
import '../index.styles.css';
import './index.styles.css';
import Button from '@components/Button';

const Detail = () => {
  return (
    <div className='App'>
      <Header headerLogo={PokemonLogo} headerLogoDescription={'Pokedex ball logo'}>
        <p>Welcome to Pokedex page!</p>
      </Header>
      <div className='bodyHome'>
        <Board>
          <div className='pokemonDetail'>
            <div className='imagePokemonDetail'>
              <Image source={POKEDEX_ITEM[0].photo} alt={POKEDEX_ITEM[0].name} width='250px' />
            </div>
            <div className='pokemonDetailNav'>
              <div className='pokemonDetailTitle'>
                <h2 className='pokemonDetailName'>Bulbasaur</h2>
                <div className='pokemonDetailBtn'>
                  <Link className='linkTextEditPage'>Edit Pokemon</Link>
                  <Link className='linkTextEditPage'>Delete Pokemon</Link>
                </div>
              </div>
              <div className='pokemonType'>
                <p className='typeBug'>bug</p>
                <p className='typeWalk'>walking</p>
              </div>
              <div className='pokemonDetailDescription'>
                <p>
                  It loves the honey and can locate flower patches that have even tiny amounts of
                  pollen. Profile
                </p>
                <Link className='linkBack' href='/'>
                  &lArr; Back to Pokedex
                </Link>
              </div>
            </div>
          </div>
          <div className='pokemonDetailLocation'>
            <div className='locationTitle'>
              <h2 className='locationTitleText'>Spotted Locations</h2>
              <div className='locationTitleBtn'>
                <Button label={'+ Add Location'} btnStyle='secondary' />
              </div>
            </div>
            <div className='detailRouteCard'>
              <div className='detailRouteName'>
                <p className='routeNumber'>Route 53</p>
                <p className='routeDate'>2019-01-01</p>
              </div>
              <div className='detailRouteBtn'>
                <Button label={'Edit'} btnStyle='tertiary' />
                <Button label={'Delete'} btnStyle='tertiary' />
              </div>
            </div>
          </div>
        </Board>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
