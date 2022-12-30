// Libraries
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { SettingsIcon } from '@chakra-ui/icons';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

interface sideBarProps {
  icon?: React.ReactNode;
  name: string;
  description?: string;
  setting?: boolean;
}

interface IProps {
  children?: React.ReactNode;
  data?: sideBarProps[];
}

const SideBar: React.FC<IProps> = ({ children, data }) => {
  return (
    <Box fontSize='text.small'>
      {data &&
        data.map((item) => {
          return (
            <Box borderBottom='1px solid lightgrey' key={generateKey()}>
              <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                padding='15px 0px'
              >
                {item.icon}
                <Text as='b' marginLeft='10px'>
                  {item.name}
                </Text>
                {item.setting && <SettingsIcon />}
              </Box>
              <Box marginLeft='10px' paddingBottom='15px'>
                {item.description}
              </Box>
            </Box>
          );
        })}
      {children}
    </Box>
  );
};

export default memo(SideBar);
