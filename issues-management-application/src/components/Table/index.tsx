import React from 'react';
import { Table as TableChakra, TableContainer, Tbody, Thead } from '@chakra-ui/react';
import { IssueModel } from '@models/index';
import TableRows from '@components/Table/TableRows';
import { generateKey } from '@utils/mainFeaturesUtils';
import Issue from '@components/Issue';
import TableHead from '@components/Table/TableHead';

interface IProps {
  issue: IssueModel[];
}

const Table: React.FC<IProps> = ({ issue }) => {
  let numberIssueClosed = 0;
  issue.map((item) => {
    if (item.issueStatus == false) {
      return (numberIssueClosed = ++numberIssueClosed);
    }
  });
  const numberIssueOpened = issue.length - numberIssueClosed;

  return (
    <TableContainer
      border='1px solid lightgrey'
      bgColor='mainBackground'
      borderRadius='5px'
      w='100%'
    >
      <TableChakra variant='simple'>
        <Thead>
          <TableHead
            issue={issue}
            numberOfOpenedIssue={numberIssueOpened}
            numberOfClosedIssue={numberIssueClosed}
          />
        </Thead>
        <Tbody>
          {issue &&
            issue.map((item) => {
              return (
                <TableRows key={generateKey()}>
                  <Issue issue={item} />
                </TableRows>
              );
            })}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default Table;
