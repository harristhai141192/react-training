import { Box, Container, useMediaQuery, Text } from '@chakra-ui/react';
import InputFilter from './InputFilter';
import ButtonLabel from './ButtonLabel';
import Table from '@components/Table';
import { issueData } from '@mockData/issueData';
import { MdOutlineTipsAndUpdates } from 'react-icons/md';

const IssueList = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <Container>
      <Box marginBottom='20px'>
        <Box display='flex' flexDirection={isMobile ? 'column' : 'row'}>
          <InputFilter />
          <ButtonLabel />
        </Box>
        <Box>
          <Table issue={issueData} />
        </Box>
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
