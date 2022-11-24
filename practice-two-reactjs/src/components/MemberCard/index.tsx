// Libraries
import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

// Icon
import {
  FaMailBulk,
  FaBirthdayCake,
  FaChild,
  FaBriefcase,
  FaTransgender,
  FaPenNib,
} from 'react-icons/fa';

// Components
import ModalComponent from '@components/Modal';
import { Member } from '@models/index';

interface IProps {
  member?: Member;
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
      <Box
        display='flex'
        fontFamily='RalewayLight'
        padding='10px'
        maxHeight='280px'
        boxShadow='0 0 3px 1px lightgrey'
        marginBottom='30px'
        bgColor='#F8F8F8'
      >
        <Box flexGrow='4' w='30%'>
          <Box
            height={{ sm: '150px', md: '170px', lg: '200px' }}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <Image
              src={member?.memberImg}
              objectFit='cover'
              w={{ sm: '120px', md: '150px', lg: '170px' }}
              h={{ sm: '120px', md: '150px', lg: '170px' }}
              borderRadius='50%'
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
          <Box display='flex' flexDirection='row' justifyContent='center'>
            <Text as='b' fontSize='xl'>
              {member?.memberName}
            </Text>
          </Box>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='center'
            marginBottom='15px'
            alignItems='center'
          >
            <Text fontSize='text.medium'>{member?.phone}</Text>
          </Box>

          <Box display='flex' flexDirection='row' alignItems='center'>
            <FaMailBulk /> &nbsp;
            <Text fontSize='text.large'>{member?.email}</Text>
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <FaBirthdayCake />
            &nbsp;
            <Text fontSize='text.large'>{member?.dateOfBirth}</Text>
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <FaChild /> &nbsp;
            <Text fontSize='text.large'>Member since {member?.memberSince}</Text>
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <FaBriefcase /> &nbsp;
            <Text fontSize='text.large'>{member?.job}</Text>
          </Box>
          <Box display='flex' flexDirection='row' alignItems='center'>
            <FaTransgender /> &nbsp;
            <Text fontSize='text.large'>{member?.gender}</Text>
          </Box>
          <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center'>
            <FaPenNib /> &nbsp;
            <Text fontSize='text.large'>{member?.description}</Text>
          </Box>
        </Box>
      </Box>
    </ModalComponent>
  );
};

export default MemberCard;
