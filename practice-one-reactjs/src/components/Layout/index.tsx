// Libraries
import React from 'react';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

// Images
import { PokemonLogo } from '@assets/index';

// CSS
import '../../pages/index.styles.css';

interface IProps {
  children?: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='App'>
      <Header headerLogo={PokemonLogo} headerLogoDescription='Pokedex ball logo' />
      <div className='bodyHome'>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
