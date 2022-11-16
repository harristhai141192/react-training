// Libraries
import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

// Components
import ModalComponent from '@components/Modal';
import { IMemberDetail } from '@models/index';

interface IProps {
  member?: IMemberDetail;
  modalTitle: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const MemberCard: React.FC<IProps> = ({
  member,
  children,
  modalTitle,
  isOpen = false,
  onClose = () => {},
}) => {
  return (
    <ModalComponent modalTitle={modalTitle} size='xl' isOpen={isOpen} onClose={onClose}>
      <Box display='flex' fontFamily='RalewayLight' padding='10px' maxHeight='280px'>
        <Box flexGrow='4' w='30%' boxShadow='0 0 3px 1px lightgrey'>
          <Box>
            <Image src={member?.memberImg} objectFit='cover' w='100%' h='100%' />
          </Box>
          <Box
            display='flex'
            marginTop='5px'
            justifyContent='space-around'
            w='100%'
            p='0px 10px 5px 10px'
          >
            {children}
          </Box>
        </Box>
        <Box flexGrow='6' display='flex' flexDirection='column' paddingLeft='10px'>
          <Text as='b'>
            Name:
            {member?.memberName}
          </Text>
          <Text as='b'>
            Phone Number:
            {member?.phone}
          </Text>
          <Text as='b'>
            Birthday:
            {member?.dateOfBirth}
          </Text>
          <Text as='b'>
            Email:
            {member?.email}
          </Text>
          <Text as='b'>
            Member Since:
            {member?.memberSince}
          </Text>
          <Text as='b'>
            Job:
            {member?.job}
          </Text>
          <Text as='b'>
            Description:
            {member?.description}
          </Text>
          <Text as='b'>
            Gender:
            {member?.gender}
          </Text>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default MemberCard;
