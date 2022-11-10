import './App.css';
import themes from './themes';
import FormComponent from '@components/Form';

import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <FormComponent
        errorName={false}
        errorDOB={false}
        errorPhone={false}
        errorMember={false}
        errorEmail={false}
      />
    </ChakraProvider>
  );
}

export default App;
