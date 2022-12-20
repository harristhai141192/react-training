import React from 'react';
import { Box, Checkbox, Text } from '@chakra-ui/react';
import { FiDisc } from 'react-icons/fi';
import { IssueModel } from '@models/index';
import { Link } from 'react-router-dom';
import { PAGE_ROUTES } from '@constants/routes';

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
          <FiDisc color={issue.locked ? 'darkviolet' : 'cadetblue'} data-testid='labelIssue' />
          <Link to={`${PAGE_ROUTES.DETAIL}/${issue.number}`}>
            <Text
              as='b'
              alignItems='flex-start'
              marginLeft='8px'
              fontSize='text.small'
              _hover={{ color: 'tomato' }}
            >
              {issue.title}
            </Text>
          </Link>
        </Box>
        <Box marginLeft='25px'>
          <Text as='sub'>
            #{issue.number} is {!issue.locked ? 'opened at' : 'closed at'}{' '}
            {issue.created_at?.split('T')[0]} by {issue.user?.login}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Issue;
