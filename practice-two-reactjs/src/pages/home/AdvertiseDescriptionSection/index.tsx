// Libraries
import { Box, Text } from '@chakra-ui/react';

// Component
import BoxComponent from '@components/Box';

const AdvertiseDescription = () => {
  return (
    <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }} p='0% 4%'>
      <Box marginRight='5%'>
        <BoxComponent
          subText='Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.'
          imageURL='src/assets/images/photoAva1.png'
          width={{ sm: '270px', md: '250px' }}
        />
      </Box>
      <Box
        marginTop='5%'
        display={{ sm: 'flex', md: '' }}
        justifyContent={{ sm: 'flex-end', md: '' }}
        marginBottom={{ sm: '30px', md: '0px' }}
      >
        <BoxComponent
          subText='Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.'
          imageURL='src/assets/images/photoAva2.svg'
          width={{ sm: '270px', md: '250px' }}
        />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='left'
        margin='0% 7%'
        padding={{ sm: '10px', md: '0px' }}
        alignItems={{ sm: 'center', md: '' }}
      >
        <Text fontSize='3xl' fontFamily='PlayFairBold'>
          The source for proven, engaging email campaigns
        </Text>
        <Text fontSize='xs' fontFamily='RalewayLight' marginTop='15px'>
          Whether you’re a startup, small business, e-commerce store, or want to promote your app,
          NinjaMail has the feature set tailored for your business.
        </Text>
      </Box>
    </Box>
  );
};

export default AdvertiseDescription;
