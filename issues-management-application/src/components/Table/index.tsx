import React, { memo } from 'react';
import { Table as TableChakra, TableContainer, Tbody, Thead } from '@chakra-ui/react';
import { IssueModel } from '@models/index';
import TableRows from '@components/Table/TableRows';
import { generateKey } from '@utils/mainFeaturesUtils';
import Issue from '@components/Issue';
import TableHead from '@components/Table/TableHead';

interface IProps {
  issues: IssueModel[];
}

const Table: React.FC<IProps> = ({ issues }) => {
  let numberIssueClosed = 0;
  console.log('issues', issues);

  issues?.map((item) => {
    if (item.locked == false) {
      return (numberIssueClosed = ++numberIssueClosed);
    }
  });

  const numberIssueOpened = issues.length - numberIssueClosed;

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
            issue={issues}
            numberOfOpenedIssue={numberIssueOpened}
            numberOfClosedIssue={numberIssueClosed}
          />
        </Thead>
        <Tbody>
          {issues?.map((issue) => (
            <TableRows key={generateKey()}>
              <Issue issue={issue} />
            </TableRows>
          ))}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default memo(Table);
