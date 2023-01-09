// Libraries
import React, { useCallback, useRef } from 'react';
import { Box, Text, FormControl } from '@chakra-ui/react';
import CommentBox from '@components/CommentBox';
import TextArea from '@components/TextArea';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  handleSubmitButton?: () => void;
  handleSubmitForm: (data: { body: string }) => void;
}

const AddComment: React.FC<IProps> = ({
  userImage,
  imageAlt,
  handleSubmitButton,
  handleSubmitForm,
}) => {
  // Get ref from input of comment
  const commentInputEl = useRef<HTMLTextAreaElement | null>(null);

  // Handle submit form
  const handleOnClick = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (commentInputEl?.current?.value) {
      handleSubmitForm({
        body: commentInputEl.current.value,
      });
    }
  }, []);
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
        <form onSubmit={handleOnClick}>
          <FormControl display='flex' flexDirection='column'>
            <TextArea
              title={'Comment'}
              isMarkdown={false}
              valueInput={commentInputEl}
              handleSubmitButton={handleSubmitButton}
            />
          </FormControl>
        </form>
      </Box>
    </CommentBox>
  );
};

export default AddComment;
