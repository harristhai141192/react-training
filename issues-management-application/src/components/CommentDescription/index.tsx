// Libraries
import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

// Themes
import themes from '@themes/index';
import CommentBox from '@components/CommentBox';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  userName?: string;
  userCommentTime?: string;
  userComment?: string;
}

const CommentDescription: React.FC<IProps> = ({
  userName,
  userCommentTime,
  userComment,
  userImage = '',
  imageAlt = '',
}) => {
  return (
    <CommentBox userImage={userImage} imageAlt={imageAlt}>
      <Box
        bgColor='boxCommentColor'
        borderBottom={`1px solid ${themes.colors.borderCommentBox}`}
        borderTopRadius='6px'
        fontSize={{ sm: 'text.small', md: 'text.medium' }}
        margin='0'
        padding='5px 15px'
        display='flex'
        flexDirection='row'
      >
        <Text as='b'>{userName}</Text>
        <Text margin='0' color='textDescriptionColor'>
          &nbsp; commented on {userCommentTime}
        </Text>
      </Box>
      <Box padding='10px 15px' fontSize={{ sm: 'text.small', md: 'text.medium' }}>
        {userComment}
      </Box>
    </CommentBox>
  );
};

export default CommentDescription;
