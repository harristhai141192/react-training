import { ChakraProvider } from '@chakra-ui/react';
import Status from '@components/Status';
import themes from './themes';

function App() {
  console.log('themes', themes.colors.titleColor);

  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <Status isOpen={false} />
    </ChakraProvider>
  );
}

export default App;
