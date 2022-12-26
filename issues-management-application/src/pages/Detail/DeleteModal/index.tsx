// Libraries
import React from 'react';
import { Text, Button, ModalBody, Box, ModalFooter } from '@chakra-ui/react';

// Components
import Modal from '@components/Modal';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

const DeleteModal: React.FC<IProps> = ({ isOpen = false, onClose, onDelete }) => {
  return (
    <Modal title={'Delete An Issue'} isOpen={isOpen} onClose={onClose}>
      <ModalBody>
        <Text>Do you want to delete this issue?</Text>
      </ModalBody>
      <ModalFooter padding='0' borderTop='1px solid lightgrey'>
        <Box w='100%' padding='10px 15px' height='50px' display='flex' justifyContent='end'>
          <Button bgColor='red' marginRight='10px' onClick={onDelete}>
            Yes
          </Button>
          <Button onClick={onClose}>No</Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
