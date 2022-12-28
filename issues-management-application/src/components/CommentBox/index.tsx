// Libraries
import React from 'react';
import { Box, Image } from '@chakra-ui/react';

// Themes
import themes from '@themes/index';

interface IProps {
  isAddedComment?: boolean;
  userImage?: string;
  imageAlt?: string;
  children?: React.ReactNode;
}

const CommentBox: React.FC<IProps> = ({
  isAddedComment = false,
  userImage,
  imageAlt,
  children,
}) => {
  return (
    <>
      <Box display='flex' flexDirection='row' textAlign='left'>
        <Box
          w={{ sm: '15%', md: '70px' }}
          paddingRight='5px'
          display='flex'
          justifyContent='center'
        >
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
          border={`1px solid ${!isAddedComment ? themes.colors.borderCommentBox : 'lightgrey'}`}
          w={{ sm: '85%', md: '95%' }}
          borderRadius='7px'
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default CommentBox;
