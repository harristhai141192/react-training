// Libararies
import React from 'react';

// Components
import LoadingSpinner from '@components/LoadingSpinner';

// CSS
import './index.styles.css';

interface IProps {
  title?: string;
  addButton?: React.ReactNode;
  cardItem?: React.ReactNode;
  children?: React.ReactNode;
  isLoading?: boolean;
  isError?: boolean;
}

const Board: React.FC<IProps> = ({ title, addButton, cardItem, children, isLoading }) => (
  <div className='pokedexBoard'>
    {!isLoading ? (
      <>
        <div className='loadingBoard'>
          {children}
          <div className='pokedexNavBoard'>
            <div className='boardName'>
              <h2>{title}</h2>
            </div>
            <div className='addButton'>{addButton}</div>
          </div>
          <div className='pokedexCard'>{cardItem}</div>
        </div>
      </>
    ) : (
      <LoadingSpinner />
    )}
  </div>
);

export default Board;
