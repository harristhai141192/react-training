import { ChakraProvider } from '@chakra-ui/react';
import themes from './themes';

function App() {
  return <ChakraProvider theme={themes} resetCSS={true}></ChakraProvider>;
}

export default App;
