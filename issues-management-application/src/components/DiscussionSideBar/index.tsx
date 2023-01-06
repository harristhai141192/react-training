// Libraries
import React, { memo } from 'react';
import { Box } from '@chakra-ui/react';

// Mock
import { discussionSideBarData } from '@mockData/discussionSideBarData';

// Components
import TaskBar from '@components/TaskBar';
import IssueManagement from '@components/IssueManagement';

interface IProps {
  isLock?: boolean;
  isAddPage?: boolean;
  onLockIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onUnLockIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onEditIssue?: React.MouseEventHandler<HTMLButtonElement>;
  onDeleteIssue?: React.MouseEventHandler<HTMLButtonElement>;
}

const DiscussionSideBar: React.FC<IProps> = ({
  isLock = false,
  isAddPage = false,
  onLockIssue,
  onUnLockIssue,
  onEditIssue,
  onDeleteIssue,
}) => {
  return (
    <Box>
      <TaskBar data={discussionSideBarData} />
      {isAddPage ? (
        ''
      ) : (
        <IssueManagement
          isLock={isLock}
          onLockIssue={onLockIssue}
          onUnLockIssue={onUnLockIssue}
          onEditIssue={onEditIssue}
          onDeleteIssue={onDeleteIssue}
        />
      )}
    </Box>
  );
};

export default memo(DiscussionSideBar);
