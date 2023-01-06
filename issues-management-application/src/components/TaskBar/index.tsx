// Libraries
import React from 'react';
import { Box } from '@chakra-ui/react';
import { memo } from 'react';

// Utils
import { generateKey } from '@utils/index';
import Task from './task';

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

const TaskBar: React.FC<IProps> = ({ children, data }) => {
  return (
    <Box fontSize='text.small'>
      {data &&
        data.map((item) => {
          return (
            <Task
              key={generateKey()}
              icon={item.icon}
              name={item.name}
              description={item.description}
              setting={item.setting}
            />
          );
        })}
      {children}
    </Box>
  );
};

export default memo(TaskBar);
