import React from 'react';
import { Table, TableContainer, Tbody, Thead } from '@chakra-ui/react';
import { IssueModel } from '@models/index';
import TableRows from '@components/TableRows';
import { generateKey } from '@utils/mainFeaturesUtils';
import Issue from '@components/Issue';
import TableHead from '@components/TableHead';

interface IProps {
  issue: IssueModel[];
}

const TableIssue: React.FC<IProps> = ({ issue }) => {
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
          <TableHead
            issue={issue}
            numberOfOpenedIssue={numberIssueOpened}
            numberOfClosedIssue={numberIssueClosed}
          />
        </Thead>
        <Tbody>
          {issue.map((item) => {
            return (
              <TableRows key={generateKey()}>
                <Issue issue={item} />
              </TableRows>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableIssue;
