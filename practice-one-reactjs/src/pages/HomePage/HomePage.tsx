// Home Page

// Components
import Header from '@components/Header';

// Images
import { PokemonLogo } from '@assets/index';

const welcomeBar = () => <p>Welcome to Pokedex</p>;

const HomePage = () => (
  <Header headerLogo={PokemonLogo} handleLogoClick={welcomeBar}>
    <p>Welcome to Pokedex</p>
  </Header>
);

export default HomePage;
