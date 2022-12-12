import React from 'react';
import {
  Box,
  Text,
  Checkbox,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useMediaQuery,
} from '@chakra-ui/react';
import { IssueModel } from '@models/index';
import Issue from '@components/Issue';
import { generateKey } from '@utils/mainFeaturesUtils';
import { FiDisc } from 'react-icons/fi';
import { labelData } from '@mockData/labelData';

interface IProps {
  issue: IssueModel[];
}

const TableIssue: React.FC<IProps> = ({ issue }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  let numberIssueClosed = 0;
  issue.map((item) => {
    if (item.issueStatus == false) {
      return (numberIssueClosed = ++numberIssueClosed);
    }
  });
  const numberIssueOpened = issue.length - numberIssueClosed;

  return (
    <TableContainer>
      <Table variant='simple' w={{ sm: '500px', md: '1000px' }}>
        <Thead>
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
                  <Text marginLeft='5px'>{numberIssueOpened} Opened</Text>
                  <Text marginLeft='5px'>{numberIssueClosed} Closed</Text>
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
        </Thead>
        <Tbody>
          {issue.map((item) => {
            return (
              <Tr key={generateKey()} w='100%'>
                <Td w='100%'>
                  <Issue
                    issueId={item.issueId}
                    issueName={item.issueName}
                    issueAuthor={item.issueAuthor}
                    issueStatus={item.issueStatus}
                    issueCreatedTime={item.issueCreatedTime}
                    onChangeChecked={item.onChangeChecked}
                  />
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableIssue;
