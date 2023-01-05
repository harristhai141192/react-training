// Libraries
import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Mock
import { navBarData } from '@mockData/navBarData';

// Utils
import { generateKey } from '@utils/index';

const NavBar = () => {
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap' w='100%'>
      {navBarData.map((item) => {
        return (
          <Button
            w={{ sm: '30%', md: '10%' }}
            key={generateKey()}
            variant='unstyled'
            leftIcon={item.icon}
          >
            {item.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default memo(NavBar);
