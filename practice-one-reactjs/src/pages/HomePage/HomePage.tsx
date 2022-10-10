// Home Page

// Components
import Header from '@components/Header';

// Images
import { PokemonLogo } from '@assets/index';
import { useEffect, useState } from 'react';
import Button from '@components/Button';

const HomePage = () => {
  const welcomeBar = () => <p>Welcome to Pokedex</p>;
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
    if (count > 3) {
      throw new Error('App Crashed');
    }
  }, [count]);
  return (
    <>
      <Button
        label={'CLICK ME'}
        onClick={() => {
          setCount(count + 1);
        }}
      />
      <p>{count} times</p>
    </>
  );
};

export default HomePage;
