// Libraries
import React, { memo } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { LockIcon, UnlockIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons';

// Mock
import { discussionSideBarData } from '@mockData/discussionSideBarData';

// Components
import SideBar from '@components/SideBar';

interface IProps {
  isLock?: boolean;
  onLockIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onUnLockIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onEditIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteIssue?: React.MouseEventHandler<HTMLButtonElement>;
}

const DiscussionSideBar: React.FC<IProps> = ({
  isLock = false,
  onLockIssue,
  onUnLockIssue,
  onEditIssue,
  onDeleteIssue,
}) => {
  return (
    <Box>
      <SideBar data={discussionSideBarData} />
      <SideBar>
        <Box w={{ sm: '150px', md: '250px' }} display='flex' flexDirection='column'>
          {!isLock ? (
            <Button
              fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
              variant='link'
              leftIcon={<LockIcon />}
              onClick={onLockIssue}
            >
              Lock conversation
            </Button>
          ) : (
            <Button
              fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
              variant='link'
              leftIcon={<UnlockIcon />}
              onClick={onUnLockIssue}
            >
              Unlock Issue
            </Button>
          )}
          <Button
            fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
            variant='link'
            leftIcon={<EditIcon />}
            onClick={onEditIssue}
          >
            Edit Issue
          </Button>
          <Button
            fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
            variant='link'
            leftIcon={<DeleteIcon />}
            onClick={onDeleteIssue}
          >
            Delete Issue
          </Button>
        </Box>
      </SideBar>
    </Box>
  );
};

export default memo(DiscussionSideBar);
