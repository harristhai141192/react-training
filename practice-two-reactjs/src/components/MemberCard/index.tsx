// Libraries
import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

// Components
import ModalComponent from '@components/Modal';

interface IProps {
  modalTitle: string;
  memberName: string;
  memberImg?: string;
  children?: React.ReactNode;
  phone?: string;
  dateOfBirth?: string;
  email?: string;
  memberSince?: string;
}

const MemberCard: React.FC<IProps> = ({
  modalTitle,
  memberName,
  memberImg,
  children,
  phone,
  dateOfBirth,
  email,
  memberSince,
}) => {
  return (
    <ModalComponent modalTitle={modalTitle} size='xl'>
      <Box display='flex' fontFamily='RalewayLight' padding='10px' height='260px'>
        <Box flexGrow='4' w='30%' boxShadow='0 0 3px 1px lightgrey'>
          <Box>
            <Image src={memberImg} objectFit='cover' w='100%' h='100%' />
          </Box>
          <Box
            display='flex'
            marginTop='12px'
            justifyContent='center'
            w='100%'
            p='0px 10px 5px 10px'
          >
            {children}
          </Box>
        </Box>
        <Box flexGrow='6' display='flex' flexDirection='column' paddingLeft='10px'>
          <Text as='b'>
            Name:
            {memberName}
          </Text>
          <Text>
            <b>Phone Number: </b>
            {phone}
          </Text>
          <Text>
            <b>Birthday: </b>
            {dateOfBirth}
          </Text>
          <Text>
            <b>Email: </b>
            {email}
          </Text>
          <Text>
            <b>Member Since: </b>
            {memberSince}
          </Text>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default MemberCard;
