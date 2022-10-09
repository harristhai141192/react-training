// Libararies

// CSS
import './index.styles.css';

interface IBoardProps {
  addButton: React.ReactNode;
  cardItem: React.ReactNode;
}

const Board: React.FC<IBoardProps> = ({ addButton = <></>, cardItem = <></> }) => {
  return (
    <div className='pokedexBoard'>
      <div className='pokedexNavBoard'>
        <div className='boardName'>
          <h2>Pokedex</h2>
        </div>
        <div className='addButton'>{addButton}</div>
      </div>
      <div className='pokedexCard'>{cardItem}</div>
    </div>
  );
};

export default Board;
