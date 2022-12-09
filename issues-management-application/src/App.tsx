import { ChakraProvider } from '@chakra-ui/react';
import Issue from '@components/Issue';
import themes from './themes';

function App() {
  console.log('themes', themes.colors.titleColor);

  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <Issue
        issueName='Controlling the air plan thru the bad weather!'
        issueId='1'
        issueStatus={false}
        issueCreatedTime='2022/12/12'
        issueAuthor='BaoThai'
      />
    </ChakraProvider>
  );
}

export default App;
