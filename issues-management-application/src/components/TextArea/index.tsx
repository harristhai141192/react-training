// Libraries
import React, { RefObject } from 'react';
import { Box, Text, Button, Textarea as ChakraTextArea } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons';

// Components
import MarkdownBar from '@components/MarkdownBar';

interface IProps {
  title: string;
  isMarkdown: boolean;
  valueInput: RefObject<HTMLTextAreaElement> | null;
  handleSubmitButton?: () => void;
}

const TextArea: React.FC<IProps> = ({ title, isMarkdown, valueInput, handleSubmitButton }) => {
  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        padding='5px 10px'
        marginTop='5px'
        alignContent='center'
        justifyContent='space-between'
        fontSize='text.small'
      >
        <Text h='90%'>{title}</Text>

        {isMarkdown ? (
          <Box display='flex' flexDirection='row' fontSize='text.large' w='40%'>
            <MarkdownBar />
          </Box>
        ) : (
          ''
        )}
      </Box>
      <Box padding='5px' display='flex' flexDirection='column' alignItems='center'>
        <ChakraTextArea
          aria-label='commentArea'
          ref={valueInput}
          id='body'
          w='97%'
          margin='5px'
          placeholder='Leave a comment'
          bgColor='mainBackground'
          border='1px solid lightGrey !important'
          h='300px'
          fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
        />
        <Box
          display='flex'
          flexDirection={{ sm: 'row', md: 'row' }}
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
          <Button variant='solid' type='submit' onClick={handleSubmitButton}>
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TextArea;
