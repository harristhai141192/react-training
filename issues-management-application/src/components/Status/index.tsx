import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FiDisc, FiCheckCircle } from 'react-icons/fi';

interface IProps {
  isOpen?: boolean;
}

const Status: React.FC<IProps> = ({ isOpen = false }) => {
  return (
    <Box
      bgColor={isOpen ? 'statusColor.green' : 'statusColor.purple'}
      padding='5px 0px'
      borderRadius='55px'
      fontSize='text.small'
      color='white'
      width='100px'
      data-testid='statusLabel'
    >
      {isOpen ? (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
          <FiDisc />
          <Text marginLeft='5px'>Open</Text>
        </Box>
      ) : (
        <Box display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
          <FiCheckCircle />
          <Text marginLeft='5px'>Closed</Text>
        </Box>
      )}
    </Box>
  );
};

export default Status;
