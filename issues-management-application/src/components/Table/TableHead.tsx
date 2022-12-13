import { Box, Checkbox, Th, Tr, Text, useMediaQuery } from '@chakra-ui/react';
import { IssueModel } from '@models/index';
import React from 'react';
import { FiDisc } from 'react-icons/fi';
import { labelData } from '@mockData/labelData';
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  issue: IssueModel[];
  numberOfOpenedIssue: number;
  numberOfClosedIssue: number;
}

const TableHead: React.FC<IProps> = ({ issue, numberOfClosedIssue, numberOfOpenedIssue }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Tr>
      <Th textTransform='none' fontSize={{ sm: 'text.small', md: 'text.medium' }}>
        <Box
          display='flex'
          flexDirection={isMobile ? 'column' : 'row'}
          justifyContent='space-between'
        >
          <Box display='flex' flexDirection='row' alignItems='center' marginLeft='5px'>
            <Checkbox size='sm' marginRight='10px' />

            <FiDisc color='black' />
            <Text marginLeft='5px'>
              {issue.length > 1 ? `${issue.length} Issues` : `${issue.length} Issue`}
            </Text>
            <Text marginLeft='5px'>{numberOfOpenedIssue} Opened</Text>
            <Text marginLeft='5px'>{numberOfClosedIssue} Closed</Text>
          </Box>
          <Box display='flex' flexDirection='row' marginTop={isMobile ? '10px' : ''}>
            {labelData.map((item) => {
              return (
                <Text key={generateKey()} marginLeft='10px'>
                  {item}
                </Text>
              );
            })}
          </Box>
        </Box>
      </Th>
    </Tr>
  );
};

export default TableHead;
