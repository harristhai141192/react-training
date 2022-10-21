// Libraries
import React from 'react';

// CSS
import './index.styles.css';

// Components
import Image from '@components/Image';

interface IProps {
  card: {
    code?: string;
    photo?: string;
    name?: string;
    description?: string;
  };
  handleOnClick?: (e: React.MouseEvent<HTMLElement>) => void;
  isOpen?: boolean;
}

const Card: React.FC<IProps> = ({
  card: { code = '', photo = '', name = '', description = '' },
  handleOnClick,
}) => (
  <div className='pokemonCard' onClick={handleOnClick}>
    <div className='pokemonPhoto'>
      <Image source={photo} alt={description} width='50px' />
    </div>
    <div className='pokemonDescription'>
      <div className='pokemonCode'>{code}</div>
      <div className='pokemonName'>{name}</div>
    </div>
  </div>
);

export default Card;
