// Libraries
import { Box, Text } from '@chakra-ui/react';

//Components
import Header from '@components/Header';
import Footer from '@components/Footer';

const Page404 = () => {
  return (
    <>
      <Header />
      <Box h='500px'>
        <Text fontSize='6xl'>Something Went Wrong! 404</Text>
      </Box>
      <Footer />
    </>
  );
};

export default Page404;
