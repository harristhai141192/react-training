// Libraries
import {
  Modal,
  Box,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  modalTitle: string;
  children: React.ReactNode;
  size?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalComponent: React.FC<IProps> = ({
  modalTitle,
  children,
  size,
  isOpen = false,
  onClose = () => {},
}) => {
  return (
    <Box>
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
