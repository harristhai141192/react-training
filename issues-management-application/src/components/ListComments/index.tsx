// Libraries
import React from 'react';
import { Box } from '@chakra-ui/react';

// Components
import CommentDescription from '@components/CommentDescription';

// Models
import { IComment } from '@models/index';
import { IssueModel } from '@models/index';

// Utils
import { generateKey } from '@utils/mainFeaturesUtils';

interface IProps {
  issue?: IssueModel;
  comments?: IComment[];
}

const ListComments: React.FC<IProps> = ({ issue, comments }) => {
  return (
    <Box borderBottom='3px solid lightgrey' marginTop='20px'>
      {issue?.body && (
        <Box>
          <CommentDescription
            userName={issue?.user?.login}
            userCommentTime={issue?.created_at?.split('T')[0]}
            userComment={issue?.body}
            userImage={issue?.user?.avatar_url}
            imageAlt={issue?.user?.avatar_url}
          />
          <Box borderLeft='4px solid lightgrey' h='50px' marginLeft={{ sm: '70px', md: '100px' }} />
        </Box>
      )}
      {comments &&
        comments?.map((item: IComment) => {
          return (
            <Box key={generateKey()}>
              <CommentDescription
                userName={item.user?.login}
                userCommentTime={item.created_at?.split('T')[0]}
                userComment={item.body}
                userImage={item.user?.avatar_url}
                imageAlt={item.user?.avatar_url}
              />

              <Box
                borderLeft='4px solid lightgrey'
                h='50px'
                marginLeft={{ sm: '70px', md: '100px' }}
              />
            </Box>
          );
        })}
    </Box>
  );
};

export default ListComments;
