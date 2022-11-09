import './App.css';
import themes from './themes';
import Button from '@components/Button';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={themes}>
      <Button variant='solid' label='Try Now' />
      <br />
      <Button variant='outline' label='Learn How' />
      <br />
      <Button variant='ghost' label='Features' />
    </ChakraProvider>
  );
}

export default App;
