import './App.css';
import themes from './themes';
import Input from '@components/Input';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Input
        labelName='Input'
        placeholder='input your value'
        error={true}
        errorText='Something went wrong !'
      />
    </ChakraProvider>
  );
}

export default App;
