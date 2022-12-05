// Libraries
import React, { memo } from 'react';
import { Box, Image, Text, Link, UnorderedList, ListItem, Container } from '@chakra-ui/react';

// Mock data
import { FOOTER_BAR_INFORMATION } from '@mockData/tableData';

// utils
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  linkTerms?: string;
}

const Footer: React.FC<IProps> = ({ linkTerms }) => {
  return (
    <Container as='footer'>
      {/* CONTAINER CHAKRA FOOTER */}
      <Box margin='40px 0px'>
        <Box
          display='flex'
          flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
          p='0% 10%'
          marginBottom='50px'
        >
          <Box flexGrow='4'>
            <Image w='50%' src='src/assets/images/NinjaMailLogo.svg' alt='Ninja Mail Logo' />
          </Box>
          <Box
            flexGrow='6'
            display='flex'
            justifyContent='space-between'
            textAlign='left'
            fontFamily='RalewayBold'
          >
            <Box
              display='flex'
              flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
              flexGrow='5'
              justifyContent={{ sm: 'flex-start', md: 'space-around' }}
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.serviceCenter.map((item) => {
                    return (
                      <ListItem key={generateKey()}>
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
                      <ListItem key={generateKey()}>
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
              flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
              flexGrow='5'
              justifyContent={{ sm: 'flex-start', md: 'space-around' }}
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <UnorderedList listStyleType='none'>
                  {FOOTER_BAR_INFORMATION.socialCenter.map((item) => {
                    return (
                      <ListItem key={generateKey()}>
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
                      <ListItem key={generateKey()}>
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
          flexDirection={{ sm: 'column', md: 'row', lg: 'row' }}
          p='0% 10%'
          fontFamily='RalewayBold'
          marginTop='20px'
          width={{ sm: '80%', md: '100%' }}
        >
          <Box flexGrow='4' display='flex' justifyContent='center'>
            <Text fontSize={{ sm: 'xs', md: 'sm' }}>
              NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
            </Text>
          </Box>
          <Box
            flexGrow='6'
            display='flex'
            justifyContent='space-around'
            flexDirection={{ sm: 'column', md: 'row' }}
            marginTop={{ sm: '30px', md: '0px' }}
          >
            <Link fontSize={{ sm: 'xs', md: 'sm' }} padding='0'>
              Terms & Conditions
            </Link>
            <Link
              href={linkTerms}
              fontSize={{ sm: 'xs', md: 'sm' }}
              padding='0'
              marginTop={{ sm: '7px', md: '0px' }}
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
