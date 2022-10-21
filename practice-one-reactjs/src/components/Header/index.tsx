// Libraries
import React from 'react';

// Components
import Button from '@components/Button';
import Image from '@components/Image';

// Styles
import './index.styles.css';

// constants
import { getPokemonElements } from '@constants/variables';

interface IProps {
  handleLogoClick?: () => void;
  headerLogo: string;
  headerLogoDescription: string;
  children?: React.ReactNode;
}

const Header: React.FC<IProps> = ({
  handleLogoClick,
  headerLogo = '',
  headerLogoDescription = '',
  children,
}) => {
  const generateKey = (item: string) => `${item}_${new Date().getTime()}__${Math.random()}`;
  return (
    <div className='header'>
      <div className='headerLogo' onClick={handleLogoClick}>
        <Image source={headerLogo} alt={headerLogoDescription} width='35' />
      </div>
      <div className='pokemonElements'>
        {/* RENDER ALL ELEMENTS AND SHOW UP TO NAVBAR */}
        {getPokemonElements.map((item) => {
          return <Button label={item} key={generateKey(item)} />;
        })}
      </div>
      <div className='navBar'>{children}</div>
    </div>
  );
};

export default Header;
