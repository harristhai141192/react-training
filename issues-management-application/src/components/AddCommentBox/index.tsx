import React from 'react';
import { Box, Image, Text, Textarea, Button, FormControl } from '@chakra-ui/react';
import themes from '@themes/index';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const AddCommentBox: React.FC<IProps> = ({ userImage, imageAlt, onClick }) => {
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
      <Box
        border={`1px solid ${themes.colors.borderCommentBox}`}
        w={{ sm: '85%', md: '95%' }}
        borderRadius='7px'
      >
        <Box
          bgColor='boxCommentColor'
          borderBottom={`1px solid ${themes.colors.borderCommentBox}`}
          borderTopRadius='6px'
          fontSize={{ sm: 'text.small', md: 'text.medium' }}
          margin='0'
          padding='5px 15px'
          display='flex'
          flexDirection='row'
        >
          <Text h='90%'>Write</Text>
        </Box>
        <Box padding='5px' fontSize={{ sm: 'text.small', md: 'text.medium' }}>
          <FormControl display='flex' flexDirection='column' alignItems='end'>
            <Textarea bgColor='backgroundGreyBox'></Textarea>
            <Button variant='solid' onClick={onClick} marginTop='15px'>
              Comment
            </Button>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default AddCommentBox;
