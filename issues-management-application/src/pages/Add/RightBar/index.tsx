import { Box, Text } from '@chakra-ui/react';
import { SlSettings } from 'react-icons/sl';

const RightBar = () => {
  return (
    <Box fontSize='text.small'>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Assignees</Text>
          <SlSettings />
        </Box>
        <Box paddingBottom='15px'>No one</Box>
      </Box>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Labels</Text>
          <SlSettings />
        </Box>
        <Box paddingBottom='15px'>None yet</Box>
      </Box>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Projects</Text>
          <SlSettings />
        </Box>
        <Box paddingBottom='15px'>None yet</Box>
      </Box>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Milestones</Text>
          <SlSettings />
        </Box>
        <Box paddingBottom='15px'>No milestones</Box>
      </Box>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Development</Text>
        </Box>
        <Box paddingBottom='15px'>Shows branches and pull requests linked to this issue.</Box>
      </Box>
      <Box borderBottom='1px solid lightgrey'>
        <Box display='flex' flexDirection='row' justifyContent='space-between' padding='15px 0px'>
          <Text as='b'>Helpful resources</Text>
        </Box>
        <Box paddingBottom='15px'>GitHub Community Guidelines</Box>
      </Box>
    </Box>
  );
};

export default RightBar;
