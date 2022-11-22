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
    <ModalComponent modalTitle={modalTitle} isOpen={isOpen} onClose={onClose}>
      <Box display='flex' fontFamily='RalewayLight' padding='10px' maxHeight='280px'>
        <Box flexGrow='4' w='30%' boxShadow='0 0 3px 1px lightgrey'>
          <Box
            height={{ sm: '120px', md: '170px', lg: '200px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src={member?.memberImg}
              objectFit='cover'
              w={{ sm: '100px', md: '150px', lg: '170px' }}
              h={{ sm: '100px', md: '150px', lg: '170px' }}
            />
          </Box>
          <Box
            display='flex'
            marginTop='5px'
            justifyContent='space-around'
            w='100%'
            p='0px 10px 5px 10px'
            height='25%'
          >
            {children}
          </Box>
        </Box>
        <Box
          fontSize={{ sm: 'text.small', md: 'text.small', lg: 'text.large' }}
          flexGrow='6'
          display='flex'
          flexDirection='column'
          paddingLeft='10px'
        >
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Name : &nbsp;</Text>
            <Text>{member?.memberName}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Phone Number : &nbsp;</Text>
            <Text> {member?.phone}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Birthday : &nbsp;</Text>
            <Text> {member?.dateOfBirth}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Email : &nbsp;</Text>
            <Text> {member?.email}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Member Since : &nbsp;</Text>
            <Text> {member?.memberSince}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Job : &nbsp;</Text>
            <Text> {member?.job}</Text>
          </Box>
          <Box display='flex' flexDirection='row' flexWrap='wrap'>
            <Text as='b'>Description : &nbsp;</Text>
            <Text> {member?.description}</Text>
          </Box>
          <Box display='flex' flexDirection='row'>
            <Text as='b'>Gender : &nbsp;</Text>
            <Text> {member?.gender}</Text>
          </Box>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default MemberCard;
