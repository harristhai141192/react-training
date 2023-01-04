// Libraries
import React, { useRef, useCallback } from 'react';
import { Box, FormControl, Input, Textarea, Text, Image, Button } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

// Components
import MarkdownBar from '@components/MarkdownBar';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  handleOnSubmit: (data: { title: string; body: string }) => void;
}

const CreatedIssue: React.FC<IProps> = ({ userImage, imageAlt, handleOnSubmit }) => {
  const titleInputEl = useRef<HTMLInputElement | null>(null);
  const descriptionInputEl = useRef<HTMLTextAreaElement | null>(null);
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
              />
            </Box>
            <Box
              display='flex'
              flexDirection='row'
              padding='5px 10px'
              marginTop='15px'
              alignContent='center'
              justifyContent='space-between'
            >
              <Text h='90%'>Comment</Text>
              <Box
                display='flex'
                flexDirection='row'
                fontSize='text.large'
                w='40%'
                justifyContent='space-evenly'
              >
                <MarkdownBar />
              </Box>
            </Box>
            <Box
              padding='5px'
              fontSize={{ sm: 'text.small', md: 'text.medium' }}
              display='flex'
              flexDirection='column'
              alignItems='center'
            >
              <Textarea
                ref={descriptionInputEl}
                id='body'
                w='97%'
                margin='5px'
                placeholder='Leave a comment'
                bgColor='mainBackground'
                border='1px solid lightGrey !important'
                h='300px'
              />
              <Box
                display='flex'
                flexDirection={{ sm: 'column', md: 'row' }}
                justifyContent='space-between'
                padding='15px'
                w='100%'
              >
                <Box display='flex' flexDirection='row' marginBottom='10px'>
                  <MoonIcon />
                  <Text as='sub' margin='4px 5px'>
                    Styling with Markdown is not supported
                  </Text>
                </Box>
                <Button variant='solid' type='submit'>
                  Submit
                </Button>
              </Box>
            </Box>
          </FormControl>
        </form>
      </Box>
    </Box>
  );
};

export default CreatedIssue;
