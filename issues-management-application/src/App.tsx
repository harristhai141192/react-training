import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import themes from './themes';
import IssueList from '@pages/IssueList';
import Add from '@pages/Add';
import Detail from '@pages/Detail';
import { IssueProvider } from './stores/Issue/context';
import { CommentProvider } from './stores/Comment/context';

const test = {
  issueId: '1',
  issueName: 'This is sample issue for testing',
  issueAuthor: 'Bao Thai',
  issueAuthorImage: 'https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg',
  issueCreatedTime: '12/12/2022',
  issueStatus: false,
  issueComment: [
    {
      comment: 'A dog that was stucked at the peak of moutain for months has been rescued by a man',
      commentTime: '12/12/2022',
    },
    {
      comment: 'I dont care',
      commentTime: '11/11/2009',
    },
    {
      comment: 'I dont care',
      commentTime: '11/11/2009',
    },
  ],
};

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <BrowserRouter>
        <IssueProvider>
          <CommentProvider>
            <Layout>
              <Routes>
                <Route>
                  <Route index element={<IssueList />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/detail' element={<Detail issue={test} />} />
                </Route>
              </Routes>
            </Layout>
          </CommentProvider>
        </IssueProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
