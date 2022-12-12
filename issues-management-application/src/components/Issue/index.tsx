import React from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { FiDisc } from 'react-icons/fi';

interface IProps {
  onChangeChecked?: () => void;
  issueName?: string;
  issueId?: string;
  issueStatus?: boolean;
  issueCreatedTime?: string;
  issueAuthor?: string;
}

const Issue: React.FC<IProps> = ({
  onChangeChecked,
  issueName,
  issueId,
  issueStatus,
  issueCreatedTime,
  issueAuthor,
}) => {
  return (
    <Box display='flex' flexDirection='row' h='100px' w='100%'>
      <Box marginTop='3px' marginRight='10px' data-testid='checkBoxTestId'>
        <Checkbox onChange={onChangeChecked} size='sm' data-testid='checkIssue' />
      </Box>
      <Box>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <FiDisc color={issueStatus ? 'cadetblue' : 'darkviolet'} data-testid='labelIssue' />
          <Text as='b' alignItems='flex-start' marginLeft='8px' fontSize='text.small'>
            {issueName}
          </Text>
        </Box>
        <Box marginLeft='25px'>
          <Text as='sub'>
            #{issueId} is {issueStatus ? 'opened at' : 'closed at'} {issueCreatedTime} by{' '}
            {issueAuthor}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Issue;
