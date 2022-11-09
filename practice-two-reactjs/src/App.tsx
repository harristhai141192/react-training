import './App.css';
import themes from './themes';
import Card from '@components/Card';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Card
        titleText='Frankie'
        imageBg="url('src/assets/images/Frankie.svg')"
        subText='Member since 2016'
        width='350px'
      />
    </ChakraProvider>
  );
}

export default App;
