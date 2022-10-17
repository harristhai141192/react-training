// Components
import Link from '@components/Link';
import Image from '@components/Image';
import Layout from '@components/Layout';
import Board from '@components/Board';
import Button from '@components/Button';

// Mock data
import POKEDEX_ITEM from '@mocks/tableData';

// CSS
import './index.styles.css';

const Detail = () => (
  <Layout>
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
            It loves the honey and can locate flower patches that have even tiny amounts of pollen.
            Profile
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
  </Layout>
);

export default Detail;
