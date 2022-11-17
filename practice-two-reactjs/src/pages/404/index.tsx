// Libraries
import { Box, Text } from '@chakra-ui/react';

//Components
import Header from '@components/Header';
import Footer from '@components/Footer';

const page404 = () => {
  return (
    <>
      <Header />
      <Box h='500px'>
        <Text fontSize='6xl'>Page not found 404!</Text>
      </Box>
      <Footer />
    </>
  );
};

export default page404;
