// Components
import Header from '@components/Header';
import Link from '@components/Link';
import Footer from '@components/Footer';
import Board from '@components/Board';
import Form from '@components/Form';

// Images
import { PokemonLogo } from '@assets/index';

// CSS
import '../index.styles.css';

const Add = () => {
  return (
    <div className='App'>
      <Header headerLogo={PokemonLogo} headerLogoDescription={'Pokedex ball logo'}>
        <p>Welcome to Pokedex page!</p>
      </Header>
      <div className='bodyHome'>
        <Board>
          <Link className='linkTextHomePage' href={'/'}>
            <p className='linkTextHomePage'> &lArr; Go back</p>
          </Link>
          <Form formTitle='Add New Pokemon' type1Children={undefined} />
        </Board>
      </div>
      <Footer />
    </div>
  );
};

export default Add;
