// Libraries
import React, { Children } from 'react';

// Components
import { Button } from '@components/Button';

// Styles
import './index.css';

// constants
import { ELEMENT } from '@constants/variables';

interface IHeaderProps {
  handleLogoClick?: () => void;
  headerLogo: string;
  children?: React.ReactNode;
}

const Header = ({
  handleLogoClick = () => {},
  headerLogo = '',
  children = <></>,
}: IHeaderProps) => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <div className='header__logo-img'>
          <img src={headerLogo} onClick={handleLogoClick} />
        </div>
      </div>
      <div className='elements'>
        {/* RENDER ALL ELEMENTS AND SHOW UP TO NAVBAR */}
        {ELEMENT.map((item, index) => {
          return <Button label={item.name} key={`${item.name}${index}`} />;
        })}
      </div>
      <div className='menu-bar'>{children}</div>
    </div>
  );
};

export default Header;
