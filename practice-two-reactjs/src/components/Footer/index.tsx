// Libraries
import { Box, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';

// Component
import Button from '@components/Button';

interface IProps {
  linkTerms?: string;
}

const Footer: React.FC<IProps> = ({ linkTerms }) => {
  return (
    <Box>
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
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Button marginBottom='7px' variant='link' label='Features' />
            <Button marginBottom='7px' variant='link' label='Pricing' />
            <Button marginBottom='7px' variant='link' label='Services' />
            <Button marginBottom='7px' variant='link' label='Partners' />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Button marginBottom='7px' variant='link' label='About Us' />
            <Button marginBottom='7px' variant='link' label='Tutorials' />
            <Button marginBottom='7px' variant='link' label='Resources' />
            <Button marginBottom='7px' variant='link' label='Help Center' />
            <Button marginBottom='7px' variant='link' label='Templates' />
            <Button marginBottom='7px' variant='link' label='Case Studies' />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Button marginBottom='7px' variant='link' label='Medium' />
            <Button marginBottom='7px' variant='link' label='Twitter' />
            <Button marginBottom='7px' variant='link' label='Facebook' />
            <Button marginBottom='7px' variant='link' label='Instagram' />
            <Button marginBottom='7px' variant='link' label='Linkedln' />
          </Box>
          <Box display='flex' flexDirection='column' alignItems='flex-start'>
            <Button marginBottom='7px' variant='link' label='Contact Us' />
            <Button marginBottom='7px' variant='link' label='Slack' />
            <Button marginBottom='7px' variant='link' label='Jobs' />
          </Box>
        </Box>
      </Box>
      <Box p='1px' bg='#DBDBDB' m='0% 10%'></Box>

      <Box display='flex' flexDirection='row' p='0% 10%' fontFamily='RalewayBold' marginTop='20px'>
        <Box flexGrow='4' display='flex' justifyContent='center'>
          <Text as='sub'>
            NinjaMail is a sample project for Quest AI. © 2019 Quest AI, All rights reserved.
          </Text>
        </Box>
        <Box flexGrow='6' display='flex' justifyContent='space-around'>
          <Text as='sub'>
            <Link>Terms & Conditions</Link>
          </Text>
          <Text as='sub'>
            <Link href={linkTerms}>Privacy Policy</Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
