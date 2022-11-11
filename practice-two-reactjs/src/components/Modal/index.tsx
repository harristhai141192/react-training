// Libraries
import {
  Modal,
  Box,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

// Components
import Button from '@components/Button';

interface IProps {
  modalTitle: string;
  children: React.ReactNode;
  size?: string;
}

const ModalComponent: React.FC<IProps> = ({ modalTitle, children, size }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Button onClick={onOpen} label='Open Modal' />
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ModalComponent;
