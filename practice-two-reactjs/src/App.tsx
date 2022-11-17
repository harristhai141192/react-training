import './App.css';
import themes from './themes';
import Detail from '@pages/detail';
import Home from '@pages/home';

import { ContextProvider } from './globals';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <ContextProvider>
        <Home />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
