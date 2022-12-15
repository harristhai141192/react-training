import React from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import CreatedIssue from '@components/CreatedIssue';
import MenuBar from './MenuBar';
import RightBar from './RightBar';

const Add = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      <Box padding='5px 25px' bgColor='mainBackground' borderBottom='1px solid lightgrey'>
        <MenuBar />
      </Box>
      <Container as='body' maxW='8xl'>
        <Box
          display='flex'
          flexDirection='row'
          marginTop='30px'
          justifyContent={{ sm: 'center', md: 'space-between' }}
        >
          <Box w={{ sm: '90%', md: '73%' }}>
            <CreatedIssue />
          </Box>
          <Box w={{ sm: '0', md: '20%' }}>{!isMobile && <RightBar />}</Box>
        </Box>
      </Container>
    </>
  );
};

export default Add;
