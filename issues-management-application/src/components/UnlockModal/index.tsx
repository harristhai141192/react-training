// Libraries
import React, { memo } from 'react';
import { Button, ModalBody, Box, ModalFooter, UnorderedList, ListItem } from '@chakra-ui/react';

// Components
import Modal from '@components/Modal';

interface IProps {
  onUnlock: () => void;
  onClose: () => void;
  isOpen: boolean;
}

const UnlockModal: React.FC<IProps> = ({ onUnlock = () => {}, isOpen, onClose = () => {} }) => {
  return (
    <Modal title='Unlock conversation on this issue' isOpen={isOpen} onClose={onClose}>
      <ModalBody padding='20px'>
        <UnorderedList fontSize='text.medium'>
          <ListItem>Everyone will be able to comment on this issue once more.</ListItem>
          <ListItem>You can always lock this issue again in the future.</ListItem>
        </UnorderedList>
      </ModalBody>
      <ModalFooter padding='0' borderTop='1px solid lightgrey'>
        <Box w='100%' padding='10px 15px' height='50px' display='flex' justifyContent='end'>
          <Button variant='ghost' marginRight='10px' onClick={onUnlock}>
            Unlock conversation on this issue
          </Button>
        </Box>
      </ModalFooter>
    </Modal>
  );
};

export default memo(UnlockModal);
