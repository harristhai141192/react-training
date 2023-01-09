// Libraries
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';

interface IProps {
  icon?: React.ReactNode;
  name: string;
  description?: string;
  setting?: boolean;
}

const Task: React.FC<IProps> = ({ icon, name, description, setting }) => {
  return (
    <Box borderBottom='1px solid lightgrey'>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        padding='15px 0px'
        fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
      >
        {icon}
        <Text as='b' marginLeft='10px'>
          {name}
        </Text>
        {setting && <SettingsIcon />}
      </Box>
      <Box
        marginLeft='10px'
        paddingBottom='15px'
        fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
      >
        {description}
      </Box>
    </Box>
  );
};

export default Task;
