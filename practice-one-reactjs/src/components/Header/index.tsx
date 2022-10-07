// Libraries
import React from 'react';

// Components
import { Button } from '@components/Button';
import Image from '@components/Image';

// Styles
import './index.styles.css';

// constants
import { POKEMON_ELEMENTS } from '@constants/variables';

interface IHeaderProps {
  handleLogoClick?: () => void;
  headerLogo: string;
  headerLogoDescription: string;
  children?: React.ReactNode;
}

const Header: React.FC<IHeaderProps> = ({
  handleLogoClick,
  headerLogo = '',
  headerLogoDescription = '',
  children,
}) => {
  const generateKey = (e: string) => `${e}_${new Date().getTime()}`;

  return (
    <div className='header'>
      <div className='headerLogo' onClick={handleLogoClick}>
        <Image source={headerLogo} alt={headerLogoDescription} width='35' />
      </div>
      <div className='pokemonElements'>
        {/* RENDER ALL ELEMENTS AND SHOW UP TO NAVBAR */}
        {POKEMON_ELEMENTS.map((item) => {
          console.log(generateKey(item.name));
          return <Button label={item.name} key={generateKey(item.name)} />;
        })}
      </div>
      <div className='navBar'>{children}</div>
    </div>
  );
};

export default Header;
