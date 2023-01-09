// Libraries
import React from 'react';
import { Text, ModalBody } from '@chakra-ui/react';

// Components
import Modal from '@components/Modal';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeleteModal: React.FC<IProps> = ({ isOpen = false, onClose }) => {
  return (
    <Modal title={'Delete An Issue'} isOpen={isOpen} onClose={onClose} isLockIssue={false}>
      <ModalBody>
        <Text>Do you want to delete this issue?</Text>
      </ModalBody>
    </Modal>
  );
};

export default DeleteModal;
