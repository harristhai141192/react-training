import { ChakraProvider } from '@chakra-ui/react';
import FeatureBar from '@components/FeatureBar';
import themes from './themes';

function App() {
  console.log('themes', themes.colors.titleColor);

  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <FeatureBar />
    </ChakraProvider>
  );
}

export default App;
