import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
import React from 'react';

interface IProps {
  onChange?: () => void;
}

const inputFilter: React.FC<IProps> = ({ onChange }) => {
  return (
    <Box padding='20px 0px' w={{ sm: '100%', md: '60%' }}>
      <InputGroup size='sm'>
        <InputLeftAddon>Filter</InputLeftAddon>
        <Input
          aria-label='inputFilter'
          type='text'
          placeholder='Type issue name'
          onChange={onChange}
        />
      </InputGroup>
    </Box>
  );
};
export default inputFilter;
