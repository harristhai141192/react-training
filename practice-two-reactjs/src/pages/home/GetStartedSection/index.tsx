import { Box, Text, Button } from '@chakra-ui/react';

const GetStarted = () => {
  return (
    <Box
      height={{ sm: '290px', md: '240px', lg: '366px' }}
      bgColor='var(--main-color)'
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
    >
      <Text fontSize='4xl' fontFamily='PlayFairBold' color='white' marginBottom='30px'>
        Get started today!
      </Text>
      <Button variant='unstyled'>Pick a plan</Button>
    </Box>
  );
};

export default GetStarted;
