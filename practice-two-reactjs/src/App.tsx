import './App.css';
import themes from './themes';
import Header from '@components/Header';

import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Header />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
