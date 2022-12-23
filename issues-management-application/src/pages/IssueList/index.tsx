import { Box, Container, Text } from '@chakra-ui/react';
import InputFilter from './InputFilter';
import ButtonLabel from './ButtonLabel';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

import IssueTable from './IssueTable';

const IssueList = () => {
  return (
    <Container>
      <Box marginBottom='20px'>
        <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }}>
          <InputFilter />
          <ButtonLabel />
        </Box>
        <IssueTable />
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <MdOutlineTipsAndUpdates />
        <Text marginLeft='5px' fontSize='text.small'>
          ProTip! Find all open issues with in progress development work with linked.
        </Text>
      </Box>
    </Container>
  );
};

export default IssueList;