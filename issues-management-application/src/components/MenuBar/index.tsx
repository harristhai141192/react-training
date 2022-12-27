// Libraries
import { Box, Button } from '@chakra-ui/react';
import { memo } from 'react';

// Mock
import { menuBar } from '@mockData/menuBarData';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

const MenuBar = () => {
  return (
    <Box display='flex' flexDirection='row' flexWrap='wrap' w='100%'>
      {menuBar.map((item) => {
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

export default memo(MenuBar);
