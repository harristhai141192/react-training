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
  isOpen?: boolean;
  onClose?: () => void;
}

const ModalComponent: React.FC<IProps> = ({
  modalTitle,
  children,
  isOpen = false,
  onClose = () => {},
}) => {
  return (
    // CAN APPLY SUSPENSE CHO CAC MODAL NGAY CHO IMPORT MODAL (NOT IN COMPOENNT)
    <Box fontFamily='RalewayLight'>
      <Modal isOpen={isOpen} onClose={onClose} size={{ sm: 'sm', md: 'md', lg: 'xl' }}>
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
