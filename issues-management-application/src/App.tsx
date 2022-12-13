import { ChakraProvider } from '@chakra-ui/react';
import ModalIssue from '@components/ModalIssue';
import themes from './themes';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <ModalIssue />
    </ChakraProvider>
  );
}

export default App;
