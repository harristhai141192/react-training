// Libraries
import { Box, Container, Text, ButtonGroup, Button } from '@chakra-ui/react';
import { ChatIcon, BellIcon, InfoOutlineIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

// Components
import InputFilter from '@components/InputFilter';
import IssueTable from '@components/IssueTable';
import ErrorBoundary from '@components/ErrorBoundary/index';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

const IssueList = () => {
  return (
    <Container>
      <Box marginBottom='20px'>
        <Box display='flex' flexDirection={{ sm: 'column', md: 'row' }}>
          <InputFilter />
          <Box
            padding='20px 0px'
            display='flex'
            flexDirection='row'
            justifyContent='space-around'
            w={{ sm: '100%', md: '40%' }}
          >
            <ButtonGroup isAttached>
              <Button
                bgColor='white'
                height='32px'
                leftIcon={<BellIcon />}
                variant='ghost'
                margin='0px'
              >
                Labels
              </Button>
              <Button
                bgColor='white'
                height='32px'
                leftIcon={<InfoOutlineIcon />}
                variant='ghost'
                margin='0px'
                borderLeft='none'
              >
                Milestones
              </Button>
            </ButtonGroup>
            <Link to={PAGE_ROUTES.ADD}>
              <Button marginLeft='10px'>New Issue</Button>
            </Link>
          </Box>
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
