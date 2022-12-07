import { Box, Text, Button } from '@chakra-ui/react';

const ReachCustomer = () => {
  return (
    <Box
      bg="url('src/assets/images/bg2.svg')"
      backgroundRepeat='no-repeat'
      height={{ sm: '350px', md: '600px', lg: '800px' }}
      backgroundPosition='center'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      backgroundSize={{ sm: '100%', md: '600px', lg: '800px' }}
      margin='25px 4%'
      textAlign='center'
    >
      <Text fontSize='4xl' as='b' color='#FFFFFF' fontFamily='PlayFairBold' marginBottom='15px'>
        Reach More Customers
      </Text>
      <Button variant='unstyled' size='md' padding='0px 20px'>
        Learn How
      </Button>
    </Box>
  );
};

export default ReachCustomer;
