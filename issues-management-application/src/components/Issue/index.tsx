import React from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { FiDisc } from 'react-icons/fi';
import { IssueModel } from '@models/index';

interface IProps {
  onChangeChecked?: () => void;
  issue: IssueModel;
}

const Issue: React.FC<IProps> = ({ onChangeChecked, issue }) => {
  return (
    <Box display='flex' flexDirection='row' h='100%' w='100%' marginLeft='5px'>
      <Box marginTop='3px' marginRight='10px'>
        <Checkbox onChange={onChangeChecked} size='sm' data-testid='checkIssue' />
      </Box>
      <Box>
        <Box display='flex' flexDirection='row' alignItems='center' fontSize='text.medium'>
          <FiDisc color={issue.issueStatus ? 'cadetblue' : 'darkviolet'} data-testid='labelIssue' />
          <Text as='b' alignItems='flex-start' marginLeft='8px' fontSize='text.small'>
            {issue.issueName}
          </Text>
        </Box>
        <Box marginLeft='25px'>
          <Text as='sub'>
            #{issue.issueId} is {issue.issueStatus ? 'opened at' : 'closed at'}{' '}
            {issue.issueCreatedTime} by {issue.issueAuthor}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Issue;
