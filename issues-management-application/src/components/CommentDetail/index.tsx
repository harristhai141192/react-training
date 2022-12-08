import React from 'react';
import { Box, Text, Image, theme } from '@chakra-ui/react';
import themes from '@themes/index';

interface IProps {
  userImage?: string;
  imageAlt?: string;
  userName?: string;
  userCommentTime?: string;
  userComment?: string;
}

const CommentBox: React.FC<IProps> = ({
  userName,
  userCommentTime,
  userComment,
  userImage = '',
  imageAlt = '',
}) => {
  return (
    <Box display='flex' flexDirection='row' textAlign='left'>
      <Box w={{ sm: '15%', md: '70px' }} paddingRight='5px' display='flex' justifyContent='center'>
        <Image
          w='50px'
          h='50px'
          objectFit='cover'
          src={userImage}
          alt={imageAlt}
          borderRadius='100%'
          border='1px solid lightgrey'
        />
      </Box>
      <Box
        border={`1px solid ${themes.colors.titleColor}`}
        w={{ sm: '85%', md: '95%' }}
        borderRadius='7px'
      >
        <Box
          bgColor='#d0edff'
          borderBottom={`1px solid ${themes.colors.titleColor}`}
          borderTopRadius='6px'
        >
          <Text
            fontSize={{ sm: 'text.small', md: 'text.medium' }}
            margin='0'
            padding='5px 15px'
            display='flex'
            flexDirection='row'
          >
            <Text as='b'>{userName}</Text>
            <Text margin='0' color={themes.colors.textDescriptionColor}>
              &nbsp; commented {userCommentTime} ago
            </Text>
          </Text>
        </Box>
        <Box padding='10px 15px' fontSize={{ sm: 'text.small', md: 'text.medium' }}>
          {userComment}
        </Box>
      </Box>
    </Box>
  );
};

export default CommentBox;
