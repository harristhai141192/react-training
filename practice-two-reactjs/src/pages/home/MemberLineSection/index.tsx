import { Box, Text, Button } from '@chakra-ui/react';
import Card from '@components/Card';
import InputComponent from '@components/Input';

// Mocks
import { MEMBER_DATA } from '@mockData/tableData';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

const MemberLine = () => {
  return (
    <Box margin={{ sm: '0 15%', md: '0 4%' }}>
      <Box
        display='flex'
        flexDirection={{ sm: 'column', md: 'row' }}
        justifyContent='space-evenly'
        alignItems='center'
      >
        {MEMBER_DATA.map((item) => {
          return (
            <Card
              key={generateKey()}
              card={item}
              margin='5% 0%'
              height={{ sm: '170px', md: '250px' }}
              linkToPage={PAGE_ROUTES.DETAIL}
            />
          );
        })}
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        marginTop='30px'
      >
        <Text fontSize='3xl' fontFamily='PlayFairBold'>
          Learn how others are reaching their audience easier than ever before.
        </Text>
        <Box
          display='flex'
          flexDirection='row'
          width={{ sm: '60%', md: '50%' }}
          alignItems='flex-start'
          flexWrap='wrap'
          textAlign='center'
          marginTop='5px'
        >
          <Box
            flexGrow={{ sm: '10', md: '5' }}
            width={{ sm: '100%', md: '' }}
            marginRight='15px'
            display='flex'
            flexDirection='column'
            justifyContent={{ sm: 'center', md: '' }}
          >
            <Box>
              <InputComponent placeholder='Enter your email' />
            </Box>
            <Box marginBottom='10px'>
              <Text as='sub' color='var(--main-color)'>
                Thanks! Email received
              </Text>
            </Box>
          </Box>
          <Box
            flexGrow={{ sm: '10', md: '5' }}
            display='flex'
            alignItems='self-start'
            justifyContent='center'
          >
            <Button variant='solid' padding='16px' width='120px !important'>
              Join our list
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MemberLine;
