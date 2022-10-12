// Home Page

// Components
import Header from '@components/Header';
import Link from '@components/Link';
import Footer from '@components/Footer';
import Board from '@components/Board';
import Card from '@components/Card';

// Images
import { PokemonLogo } from '@assets/index';

// Mockdata
import tableData from '@mocks/tableData';

// CSS
import '../index.styles.css';

const Home = () => {
  const generateKey = (e: string) => `${e}_${new Date().getTime()}`;
  const addPokemonLinkPage = (
    <Link className='linkToAddPage' href={'/add'}>
      <p className='linkTextAddPage'>+ Add New Pokemon</p>
    </Link>
  );

  const cardItem = (
    <>
      {tableData.map((item) => (
        <Link key={generateKey(item.code)} href={'/detail'} className='toDetail'>
          <Card cardCode={item.code} photo={item.photo} name={item.name} description={item.name} />
        </Link>
      ))}
    </>
  );

  return (
    <div className='App'>
      <Header headerLogo={PokemonLogo} headerLogoDescription={'Pokedex ball logo'}>
        <p>Welcome to Pokedex page!</p>
      </Header>
      <div className='bodyHome'>
        <Board title='Pokedex' addButton={addPokemonLinkPage} cardItem={cardItem} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
