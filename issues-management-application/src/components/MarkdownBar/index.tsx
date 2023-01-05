// Libraries
import {
  AtSignIcon,
  AttachmentIcon,
  LinkIcon,
  ViewIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  CopyIcon,
  ChatIcon,
  UpDownIcon,
} from '@chakra-ui/icons';
import { Box } from '@chakra-ui/react';

const MarkdownBar = () => {
  return (
    <Box
      fontSize={{ sm: 'text.lightSmall', md: 'text.small' }}
      display='flex'
      flexDirection='row'
      alignContent='center'
      justifyContent='space-evenly'
      w='100%'
    >
      <AtSignIcon />
      <LinkIcon />
      <AttachmentIcon />
      <ViewIcon />
      <ArrowRightIcon />
      <ArrowLeftIcon />
      <CopyIcon />
      <ChatIcon />
      <UpDownIcon />
    </Box>
  );
};

export default MarkdownBar;
