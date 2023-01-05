// Libraries
import { Box, Image, Text } from '@chakra-ui/react';
import { Link as LinkRouter } from 'react-router-dom';

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
    <Image src='/images/github_icon.svg' w='150px' h='150px' />
    <Text fontSize='6xl'>SORRY!</Text>
    <Text fontSize='heading.extraLarge'>We could not find what you are looking for!</Text>
    <Box
      display='flex'
      textAlign='center'
      flexDirection='row'
      justifyContent='center'
      alignItems='center'
    >
      <LinkRouter to={PAGE_ROUTES.HOME}>
        <Text fontSize='text.medium' color='green'>
          &nbsp;Return to Home Page
        </Text>
      </LinkRouter>
    </Box>
  </Box>
);

export default NotFound;
