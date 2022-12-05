import { Box, Image, Text } from '@chakra-ui/react';

const BranchLogo = () => {
  return (
    <Box
      display='flex'
      flexDirection='row'
      height={{ sm: '300px', md: '150px', lg: '220px' }}
      justifyContent='space-evenly'
      flexWrap='wrap'
      marginBottom='20px'
      margin='0 15% 20px 15%'
    >
      <Box
        display='flex'
        alignItems='center'
        w='100%'
        textAlign='center'
        margin='35px 0px'
        justifyContent='center'
      >
        <Text fontSize='3xl' fontFamily='PlayFairBold'>
          All the best brands already use us.
        </Text>
      </Box>
      <Image
        src='src/assets/images/Logo1.svg'
        w={{ sm: '30%', md: '10%', lg: '20%' }}
        h={{ sm: '10%', md: '20%', lg: '20%' }}
        order={{ sm: '3', md: '1', lg: '1' }}
        margin='0px 20px'
      />
      <Image
        src='src/assets/images/Logo2.svg'
        w={{ sm: '30%', md: '10%' }}
        h={{ sm: '10%', md: '20%', lg: '20%' }}
        order={{ sm: '1', md: '2' }}
        margin='0px 20px'
      />
      <Image
        src='src/assets/images/Logo3.svg'
        w={{ sm: '30%', md: '10%' }}
        h={{ sm: '10%', md: '20%', lg: '20%' }}
        order={{ sm: '5', md: '3' }}
        margin='0px 20px'
      />
      <Image
        src='src/assets/images/Logo4.svg'
        w={{ sm: '30%', md: '10%' }}
        h={{ sm: '10%', md: '20%', lg: '20%' }}
        order={{ sm: '4', md: '4' }}
        margin='0px 20px'
      />
      <Image
        src='src/assets/images/Logo5.svg'
        w={{ sm: '30%', md: '10%' }}
        h={{ sm: '10%', md: '20%', lg: '20%' }}
        order={{ sm: '2', md: '5' }}
        margin='0px 20px'
      />
    </Box>
  );
};

export default BranchLogo;
