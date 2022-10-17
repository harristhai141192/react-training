// Libararies
import React from 'react';

// CSS
import './index.styles.css';

interface IProps {
  title?: string;
  addButton?: React.ReactNode;
  cardItem?: React.ReactNode;
  children?: React.ReactNode;
}

const Board: React.FC<IProps> = ({ title, addButton, cardItem, children }) => {
  return (
    <div className='pokedexBoard'>
      {children}
      <div className='pokedexNavBoard'>
        <div className='boardName'>
          <h2>{title}</h2>
        </div>
        <div className='addButton'>{addButton}</div>
      </div>
      <div className='pokedexCard'>{cardItem}</div>
    </div>
  );
};

export default Board;
