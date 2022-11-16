import './App.css';
import themes from './themes';
import Detail from '@pages/detail';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Detail />
    </ChakraProvider>
  );
}

export default App;
