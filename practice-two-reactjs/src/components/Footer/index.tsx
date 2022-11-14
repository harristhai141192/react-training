// Libraries
import { Box, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';

// Component
import Button from '@components/Button';

interface IProps {
  linkTerms?: string;
}

const Footer: React.FC<IProps> = ({ linkTerms }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <footer>
      <Box margin='40px 0px'>
        <Box display='flex' flexDirection='row' p='0% 10%' marginBottom='50px'>
          <Box flexGrow='4'>
            <Image w='50%' src='src/assets/images/NinjaMailLogo.svg' />
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
              flexDirection={isMobile ? 'column' : 'row'}
              flexGrow='5'
              justifyContent='space-around'
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Features
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Pricing
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Services
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Partners
                </Link>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  About Us
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Tutorials
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Resources
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Help Center
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Templates
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Case Studies
                </Link>
              </Box>
            </Box>
            <Box
              display='flex'
              flexDirection={isMobile ? 'column' : 'row'}
              flexGrow='5'
              justifyContent={isMobile ? 'flex-start' : 'space-around'}
            >
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Medium
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Twitter
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Facebook
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Instagram
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Linkedln
                </Link>
              </Box>
              <Box display='flex' flexDirection='column' alignItems='flex-start'>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Contact Us
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Slack
                </Link>
                <Link marginBottom='7px' href='javascript:void(0)' fontSize='sm'>
                  Jobs
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box p='1px' bg='#DBDBDB' m='0% 10%'></Box>

        <Box
          display='flex'
          flexDirection='row'
          p='0% 10%'
          fontFamily='RalewayBold'
          marginTop='20px'
        >
          <Box flexGrow='4' display='flex' justifyContent='center'>
            <Text fontSize='sm'>
              NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
            </Text>
          </Box>
          <Box flexGrow='6' display='flex' justifyContent='space-around'>
            <Link fontSize='sm'> Terms & Conditions</Link>
            <Link href={linkTerms} fontSize='sm'>
              Privacy Policy
            </Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
