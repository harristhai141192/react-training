import { ChakraProvider } from '@chakra-ui/react';
import TableIssue from '@components/TableIssue';
import { IssueModel } from './models';
import themes from './themes';

function App() {
  const testIssue: IssueModel = {
    issueId: '1',
    issueName: 'This is sample issue for testing',
    issueAuthor: 'Bao Thai',
    issueCreatedTime: '12/12/2022',
    issueStatus: false,
  };
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <TableIssue issue={[testIssue, testIssue, testIssue]} />
    </ChakraProvider>
  );
}

export default App;
