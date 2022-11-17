import './App.css';
import themes from './themes';
import Detail from '@pages/detail';
import { ContextProvider } from './globals';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <ContextProvider>
        <Detail />
      </ContextProvider>
    </ChakraProvider>
  );
}

export default App;
