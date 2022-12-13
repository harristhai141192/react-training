import React from 'react';
import { Box, FormControl, Input, Textarea, Text, Image, Button } from '@chakra-ui/react';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const CreatedIssue: React.FC<IProps> = ({ userImage, imageAlt, onClick }) => {
  return (
    <Box display='flex' flexDirection='row' textAlign='left'>
      <Box w={{ sm: '15%', md: '70px' }} paddingRight='5px' display='flex' justifyContent='center'>
        <Image
          w='50px'
          h='50px'
          objectFit='cover'
          src={userImage}
          alt={imageAlt}
          borderRadius='100%'
          border='1px solid lightgrey'
        />
      </Box>
      <Box border='1px solid lightgrey' w={{ sm: '85%', md: '95%' }} borderRadius='7px'>
        <FormControl>
          <Box
            bgColor='white'
            borderBottom='1px solid lightgrey'
            borderTopRadius='6px'
            fontSize={{ sm: 'text.small', md: 'text.medium' }}
            margin='0'
            padding='5px'
            display='flex'
            flexDirection='column'
          >
            <Input
              placeholder='Title'
              w='100%'
              bgColor='backgroundInputBox'
              borderRadius='5px'
              size='sm'
              border='1px solid lightGrey !important'
            />

            <Text h='90%' padding='5px 10px'>
              Write
            </Text>
          </Box>
          <Box
            padding='5px'
            fontSize={{ sm: 'text.small', md: 'text.medium' }}
            display='flex'
            flexDirection='column'
            alignItems='flex-end'
          >
            <Textarea
              placeholder='Leave a comment'
              bgColor='backgroundInputBox'
              border='1px solid lightGrey !important'
            />
            <Button variant='solid' onClick={onClick} marginTop='15px'>
              Submit
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
};

export default CreatedIssue;
