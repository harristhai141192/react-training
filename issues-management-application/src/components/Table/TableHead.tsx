// Libraries
import React from 'react';
import { Box, Checkbox, Th, Tr, Text } from '@chakra-ui/react';
// TODO: CHANGE ICON BY CHAKRA
import { FiDisc } from 'react-icons/fi';

// Models
import { IssueModel } from '@models/index';

// Mocks
import { labelData } from '@mockData/labelData';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  issue: IssueModel[];
  numberOfOpenedIssue: number;
  numberOfClosedIssue: number;
}

const TableHead: React.FC<IProps> = ({ issue, numberOfClosedIssue, numberOfOpenedIssue }) => {
  return (
    <Tr>
      <Th textTransform='none' fontSize={{ sm: 'text.small', md: 'text.medium' }}>
        <Box
          display='flex'
          flexDirection={{ sm: 'column', md: 'row' }}
          justifyContent='space-between'
        >
          <Box display='flex' flexDirection='row' alignItems='center' marginLeft='5px'>
            <Checkbox size='sm' marginRight='10px' />
            <FiDisc color='black' />
            <Text marginLeft='5px'>
              {issue.length > 1 ? `${issue.length} Issues` : `${issue.length} Issue`}
            </Text>
            <Text marginLeft='5px'>{numberOfClosedIssue} Opened</Text>
            <Text marginLeft='5px'>{numberOfOpenedIssue} Closed</Text>
          </Box>
          <Box display='flex' flexDirection='row' marginTop={{ sm: '10px', md: '' }}>
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
