import { ChakraProvider } from '@chakra-ui/react';
import Layout from './layout';
import themes from './themes';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <Layout></Layout>
    </ChakraProvider>
  );
}

export default App;
