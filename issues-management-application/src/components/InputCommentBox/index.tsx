// Libraries
import React from 'react';
import { Box, Text, Textarea, Button, FormControl } from '@chakra-ui/react';
import CommentBox from '@components/CommentBox';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const InputCommentBox: React.FC<IProps> = ({ userImage, imageAlt, onClick }) => {
  return (
    <CommentBox isAddedComment={true} userImage={userImage} imageAlt={imageAlt}>
      <Box
        bgColor='white'
        borderBottom='1px solid lightgrey'
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
          <Textarea
            bgColor='backgroundInputBox'
            border='1px solid lightGrey !important'
            placeholder='Leave a comment'
            aria-label='commentArea'
          />
          <Button variant='solid' onClick={onClick} marginTop='15px'>
            Comment
          </Button>
        </FormControl>
      </Box>
    </CommentBox>
  );
};

export default InputCommentBox;
