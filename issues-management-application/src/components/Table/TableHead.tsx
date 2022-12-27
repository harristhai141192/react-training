// Libraries
import React, { memo } from 'react';
import { Box, Th, Tr, Text } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

// Models
import { IssueModel } from '@models/index';

// Mocks
import { tableHeadData } from '@mockData/tableHeadData';

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
          alignItems='end'
        >
          <Box display='flex' flexDirection='row' alignItems='center' marginLeft='5px'>
            <StarIcon />
            <Text marginLeft='5px'>
              {issue.length > 1 ? `${issue.length} Issues` : `${issue.length} Issue`}
            </Text>
            <Text marginLeft='5px'>{numberOfClosedIssue} Opened</Text>
            <Text marginLeft='5px'>{numberOfOpenedIssue} Closed</Text>
          </Box>
          <Box display='flex' flexDirection='row' marginTop={{ sm: '10px', md: '' }}>
            {tableHeadData.map((item: string) => {
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

export default memo(TableHead);
