// Libraries
import React, { memo } from 'react';
import { UnorderedList, ListItem } from '@chakra-ui/react';

// Components
import Modal from '@components/Modal';

interface IProps {
  onUnlock: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const UnlockModal: React.FC<IProps> = ({ onUnlock = () => {}, isOpen, onClose = () => {} }) => {
  return (
    <Modal
      title='Unlock conversation on this issue'
      isOpen={isOpen}
      onClose={onClose}
      onUnlock={onUnlock}
      isLockModal={true}
      isLockIssue={true}
    >
      <UnorderedList fontSize='text.medium'>
        <ListItem>Everyone will be able to comment on this issue once more.</ListItem>
        <ListItem>You can always lock this issue again in the future.</ListItem>
      </UnorderedList>
    </Modal>
  );
};

export default memo(UnlockModal);
