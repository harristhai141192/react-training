import { Box, Text, Button } from '@chakra-ui/react';

const Banner = () => {
  return (
    <Box
      display='flex'
      alignItems='center'
      height={{ sm: '250px', md: '450px', lg: '550px' }}
      margin='35px 3%'
    >
      <Box
        display='flex'
        boxSize={{ sm: '100%', md: '100%', lg: '100%' }}
        flexDirection='column'
        textAlign='left'
        backgroundImage="url('src/assets/images/photo_hero.svg')"
        backgroundRepeat='no-repeat'
        backgroundPosition='right'
        backgroundSize={{ sm: '100%', md: '80%', lg: '60%' }}
        justifyContent={{ sm: 'top', md: 'center' }}
      >
        <Box w={{ sm: '100%', md: '50%', lg: '45%' }} textAlign='left'>
          <Text fontSize='4xl' as='b' marginBottom='30px' fontFamily='PlayFairBold'>
            Create Stunning Email Campaigns
          </Text>
          <Text
            fontSize='sm'
            fontFamily='RalewayLight'
            marginBottom='13px'
            marginTop={{ sm: '100px', md: '0px' }}
          >
            Create and launch email campaigns that captivate your customers in just a few clicks.
          </Text>
          <Box display='flex' flexDirection='row'>
            <Button marginRight='15px' size='md'>
              Try Now
            </Button>
            <Button variant='outline' size='md'>
              Get A Demo
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
