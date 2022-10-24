// Libraries
import React from 'react';

// Components
import Header from '@components/Header';
import Footer from '@components/Footer';

// Images
import { PokemonLogo } from '@assets/index';

// CSS
import '../pages/index.styles.css';

interface IProps {
  children?: React.ReactNode;
  onClick?: React.MouseEvent;
}

const Layout: React.FC<IProps> = ({ children, onClick }) => (
  <div className='App'>
    <Header headerLogo={PokemonLogo} headerLogoDescription='Pokedex ball logo' onClick={onClick} />
    {children}
    <Footer />
  </div>
);

export default Layout;
