import {
  Modal as ModalChakra,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Box,
  Text,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import React from 'react';

interface IProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<IProps> = ({ title, children, isOpen = false, onClose }) => {
  return (
    <Box>
      <ModalChakra isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={{ sm: '350px', md: '500px' }}>
          <ModalHeader padding='0'>
            <Box
              display='flex'
              borderTopRadius='5px'
              borderBottom='1px solid lightgrey'
              bgColor='backgroundInputBox'
              height='50px'
            >
              <Text padding='15px' fontSize='text.medium' as='b'>
                {title}
              </Text>
              <ModalCloseButton size='sm' marginTop='5px'>
                X
              </ModalCloseButton>
            </Box>
          </ModalHeader>
          {children}
        </ModalContent>
      </ModalChakra>
    </Box>
  );
};

export default Modal;
