// Libraries
import React from 'react';
import {
  Modal as ModalChakra,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  Box,
  Text,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
} from '@chakra-ui/react';

interface IProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  isLockModal?: boolean;
  isLockIssue?: boolean;
  onClose: () => void;
  onUnlock?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Modal: React.FC<IProps> = ({
  title,
  children,
  isOpen = false,
  isLockModal,
  isLockIssue,
  onClose,
  onUnlock,
  onSubmit,
}) => {
  return (
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
        <form onSubmit={onSubmit}>
          <FormControl>
            <ModalBody padding='20px'>{children}</ModalBody>
            <ModalFooter padding='0' borderTop='1px solid lightgrey'>
              {isLockModal ? (
                <Box w='100%' padding='10px 15px' height='50px' display='flex' justifyContent='end'>
                  <Button variant='ghost' marginRight='10px' type='submit' onClick={onUnlock}>
                    {isLockIssue
                      ? 'Unlock conversation on this issue'
                      : 'Lock conversation on this issue'}
                  </Button>
                </Box>
              ) : (
                <Box w='100%' padding='10px 15px' height='50px' display='flex' justifyContent='end'>
                  <Button bgColor='red' marginRight='10px'>
                    Yes
                  </Button>
                  <Button onClick={onClose}>No</Button>
                </Box>
              )}
            </ModalFooter>
          </FormControl>
        </form>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
