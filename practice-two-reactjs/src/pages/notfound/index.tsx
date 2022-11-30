// Libraries
import { Box, Image, Text } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

// constants
import { PAGE_ROUTES } from '@constants/routes';

const NotFound = () => (
  <Box
    height='500px'
    display='flex'
    textAlign='center'
    flexDirection='column'
    justifyContent='center'
    alignItems='center'
  >
    <Image src='src/assets/images/browser-error-404-icon.svg' w='150px' h='150px' />
    <Text fontSize='6xl'>SORRY!</Text>
    <Text fontSize='heading.extraLarge'>We could not find what you are looking for!</Text>
    <Box
      display='flex'
      textAlign='center'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
    >
      <FaHome />

      <LinkRouter to={PAGE_ROUTES.HOME}>
        <Text fontSize='text.medium' color='green'>
          &nbsp;Return to Home Page
        </Text>
      </LinkRouter>
    </Box>
  </Box>
);

export default NotFound;
