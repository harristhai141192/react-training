// Libraries
import React, { useRef, useCallback } from 'react';
import { Box, FormControl, Input, Image } from '@chakra-ui/react';

// Components
import TextArea from '../TextArea/index';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  handleOnSubmit: (data: { title: string; body: string }) => void;
  handleSubmitButton?: () => void;
}

const CreatedIssue: React.FC<IProps> = ({
  userImage,
  imageAlt,
  handleOnSubmit,
  handleSubmitButton,
}) => {
  // Get ref from input of title and description textarea
  const titleInputEl = useRef<HTMLInputElement | null>(null);
  const descriptionInputEl = useRef<HTMLTextAreaElement | null>(null);

  // Handle Click submit form
  const handleOnClick = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (titleInputEl?.current?.value && descriptionInputEl?.current?.value) {
      handleOnSubmit({
        title: titleInputEl.current.value,
        body: descriptionInputEl.current.value,
      });
    }
  }, []);

  return (
    <Box display='flex' flexDirection='row' textAlign='left'>
      <Box w={{ sm: '15%', md: '70px' }} paddingRight='5px' display='flex' justifyContent='center'>
        <Image
          width='50px'
          height='50px'
          objectFit='cover'
          src={userImage}
          alt={imageAlt}
          borderRadius='100%'
          border='1px solid lightgrey'
        />
      </Box>
      <Box
        border='1px solid lightgrey'
        w={{ sm: '85%', md: '95%' }}
        borderRadius='7px'
        fontSize={{ sm: 'text.small', md: 'text.medium' }}
      >
        <form onSubmit={handleOnClick}>
          <FormControl>
            <Box
              bgColor='white'
              borderBottom='1px solid lightgrey'
              borderTopRadius='6px'
              margin='0'
              padding='5px'
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Input
                data-testid='testInputUseRef'
                ref={titleInputEl}
                id='title'
                type='text'
                placeholder='Title'
                w='97%'
                bgColor='mainBackground'
                borderRadius='5px'
                size='sm'
                margin='5px'
                border='1px solid lightGrey !important'
                fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
              />
            </Box>
            <TextArea
              title='Comment'
              isMarkdown={true}
              valueInput={descriptionInputEl}
              handleSubmitButton={handleSubmitButton}
            />
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default CreatedIssue;
