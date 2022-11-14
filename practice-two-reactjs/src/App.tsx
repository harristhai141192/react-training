import './App.css';
import themes from './themes';
import Home from '@pages/home';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
