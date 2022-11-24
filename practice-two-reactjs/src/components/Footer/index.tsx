// Libraries
import React, { memo } from 'react';
import { Box, Image, Text, Link, UnorderedList, ListItem, Container } from '@chakra-ui/react';
import { useMediaQuery } from '@chakra-ui/react';

// Mock data
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';

// Constants
import { LOGO_URL } from '@constants/image';

interface IProps {
  linkTerms?: string;
}

const Footer: React.FC<IProps> = ({ linkTerms }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  // GENERATE KEY
  const generateKey = (item: string | undefined) =>
    `${item}_${new Date().getTime()}_${Math.random()}`;

  return (
    <Container as='footer'>
      {/* CONTAINER CHAKRA FOOTER */}
      <Box margin='40px 0px'>
        <Box
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          p='0% 10%'
          marginBottom='50px'
        >
          <Box flexGrow='4'>
            <Image w='50%' src={LOGO_URL.imgURL} alt={LOGO_URL.alt} />
          </Box>
          <Box
            flexGrow='6'
            display='flex'
            justifyContent='space-between'
            textAlign='left'
            fontFamily='RalewayBold'
          >
            {/* ISMOBILE ISSUES */}
            <Box
              display='flex'
              flexDirection={isMobile ? 'column' : 'row'}
              flexGrow='5'
              justifyContent={isMobile ? 'flex-start' : 'space-around'}
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.serviceCenter.map((item) => {
                    return (
                      <ListItem key={generateKey(item)}>
                        <Link marginBottom='7px' href='' fontSize='sm'>
                          {item}
                        </Link>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.informationCenter.map((item) => {
                    return (
                      <ListItem key={generateKey(item)}>
                        <Link marginBottom='7px' href='' fontSize='sm'>
                          {item}
                        </Link>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection={isMobile ? 'column' : 'row'}
              flexGrow='5'
              justifyContent={isMobile ? 'flex-start' : 'space-around'}
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.socialCenter.map((item) => {
                    return (
                      <ListItem key={generateKey(item)}>
                        <Link marginBottom='7px' href='' fontSize='sm'>
                          {item}
                        </Link>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.contactCenter.map((item) => {
                    return (
                      <ListItem key={generateKey(item)}>
                        <Link marginBottom='7px' href='' fontSize='sm'>
                          {item}
                        </Link>
                      </ListItem>
                    );
                  })}
                </UnorderedList>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p='1px' bg='#DBDBDB' m='0% 10%'></Box>
        <Box
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          p='0% 10%'
          fontFamily='RalewayBold'
          marginTop='20px'
          width={isMobile ? '80%' : '100%'}
        >
          <Box flexGrow='4' display='flex' justifyContent='center'>
            <Text fontSize={isMobile ? 'xs' : 'sm'}>
              NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
            </Text>
          </Box>
          <Box
            flexGrow='6'
            display='flex'
            justifyContent='space-around'
            flexDirection={isMobile ? 'column' : 'row'}
            marginTop={isMobile ? '30px' : ''}
          >
            <Link fontSize={isMobile ? 'xs' : 'sm'} padding='0'>
              Terms & Conditions
            </Link>
            <Link
              href={linkTerms}
              fontSize={isMobile ? 'xs' : 'sm'}
              padding='0'
              marginTop={isMobile ? '7px' : ''}
            >
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default memo(Footer);
