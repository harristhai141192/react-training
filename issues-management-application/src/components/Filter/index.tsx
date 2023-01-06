// Libraries
import React from 'react';
import { Box, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';

interface IProps {
  onChange?: () => void;
}

const Filter: React.FC<IProps> = ({ onChange }) => {
  return (
    <Box padding={{ sm: '20px 0px 0px 0px', md: '20px 0px' }} w='100%' marginRight='20px'>
      <InputGroup size='sm'>
        <InputLeftAddon>Filter</InputLeftAddon>
        <Input
          aria-label='inputFilter'
          type='text'
          placeholder='Type issue name'
          onChange={onChange}
          w={{ sm: '100%', md: '80%' }}
        />
      </InputGroup>
    </Box>
  );
};
export default Filter;
