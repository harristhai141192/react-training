// Libraries
import React from 'react';
import { Box, Text, FormControl } from '@chakra-ui/react';
import CommentBox from '@components/CommentBox';
import TextArea from '@components/TextArea';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  onClick?: () => void;
}

const AddComment: React.FC<IProps> = ({ userImage, imageAlt, onClick }) => {
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
        <Text h='90%' fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}>
          Write
        </Text>
      </Box>
      <Box padding='5px' fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}>
        <FormControl display='flex' flexDirection='column'>
          <TextArea
            title={'Comment'}
            isMarkdown={false}
            valueInput={null}
            handleSubmitButton={onClick}
          />
        </FormControl>
      </Box>
    </CommentBox>
  );
};

export default AddComment;
