import { Spinner } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

const LoadingSpinner = () => {
  return (
    <Box
      display='block'
      position='fixed'
      top='0%'
      left='0%'
      height='100%'
      width='100%'
      backgroundColor='rgba(192, 192, 192, 0.8)'
    >
      <Spinner
        position='absolute'
        top='50%'
        left='50%'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='var(--main-color)'
        size='xl'
      />
    </Box>
  );
};

export default LoadingSpinner;
