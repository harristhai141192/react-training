import { ChakraProvider } from '@chakra-ui/react';
import CommentBox from '@components/CommentBox';
import themes from './themes';

function App() {
  console.log('themes', themes.colors.titleColor);

  return (
    <ChakraProvider theme={themes} resetCSS={true}>
      <CommentBox
        userName='Bao Thai'
        userCommentTime='15 minutes'
        userComment='This is comment sample for storybook!!!!!!!!!!'
        userImage='https://genk.mediacdn.vn/2018/6/28/photo-5-1530178537559354148061.jpg'
        imageAlt='This is member Image'
      />
    </ChakraProvider>
  );
}

export default App;
