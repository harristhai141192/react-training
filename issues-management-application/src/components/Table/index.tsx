// Libraries
import React from 'react';
import { Table as TableChakra, TableContainer, Tbody, Thead } from '@chakra-ui/react';

// Models
import { IssueModel } from '@models/index';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

// Components
import TableRows from '@components/Table/TableRows';
import Issue from '@components/Issue';
import TableHead from '@components/Table/TableHead';

interface IProps {
  issues: IssueModel[];
}

const Table: React.FC<IProps> = ({ issues }) => {
  let numberIssueClosed = 0;
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
          {issues.length > 0 &&
            issues?.map((item) => (
              <TableRows key={generateKey()}>
                <Issue issue={item} />
              </TableRows>
            ))}
        </Tbody>
      </TableChakra>
    </TableContainer>
  );
};

export default Table;
