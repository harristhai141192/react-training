// Home Page

// Components
import Header from '@components/Header';

// Images
import { PokemonLogo } from '@assets/index';

const welcomeBar = () => {
  return <p>Welcome to Pokedex</p>;
};

const HomePage = () => {
  return (
    <Header headerLogo={PokemonLogo}>
      <p>Welcome to Pokedex</p>
    </Header>
  );
};

export default HomePage;
