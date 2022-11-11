// Libraries
import { Box, Image } from '@chakra-ui/react';

// Component
import Button from '@components/Button';

const Footer = () => {
  return (
    <Box>
      <Box display='flex' flexDirection='row'>
        <Box flexGrow='4'>
          <Image src='src/assets/images/NinjaMailLogo.svg' />
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
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Footer;
