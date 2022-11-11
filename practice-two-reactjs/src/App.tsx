import './App.css';
import themes from './themes';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return <ChakraProvider theme={themes}></ChakraProvider>;
}

export default App;
