import './App.css';
import themes from './themes';
import Card from '@components/Card';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return <ChakraProvider theme={themes}></ChakraProvider>;
}

export default App;
