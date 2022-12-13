import { ChakraProvider } from '@chakra-ui/react';
import CreatedIssue from '@components/CreatedIssue';
import themes from './themes';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <CreatedIssue />
    </ChakraProvider>
  );
}

export default App;
