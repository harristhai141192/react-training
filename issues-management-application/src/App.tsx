import CommentDetail from '@components/CommentDetail';
import { ChakraProvider } from '@chakra-ui/react';
import themes from './themes';

function App() {
  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <CommentDetail
        userName='Bao Thai'
        userCommentTime='15 minutes'
        userComment='This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!This is comment sample for storybook!!!!!!!!!!'
        userImage='https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg'
        imageAlt=''
      />
    </ChakraProvider>
  );
}

export default App;
