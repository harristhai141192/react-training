// Libraries
import { Box, Container, Text } from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';

// Components
import InputFilter from '@components/InputFilter';
import ButtonLabel from '@components/ButtonLabel';
import IssueTable from '@components/IssueTable';
import ErrorBoundary from '../../components/ErrorBoundary/index';

const IssueList = () => {
  return (
    <Container>
      <Box marginBottom='20px'>
        <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }}>
          <InputFilter />
          <ButtonLabel />
        </Box>
        <ErrorBoundary>
          <IssueTable />
        </ErrorBoundary>
      </Box>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <ChatIcon />
        <Text marginLeft='5px' fontSize='text.small'>
          ProTip! Find all open issues with in progress development work with linked.
        </Text>
      </Box>
    </Container>
  );
};

export default IssueList;
