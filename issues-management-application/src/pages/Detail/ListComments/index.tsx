import React, { memo } from 'react';
import CommentBox from '@components/CommentBox';
import { IComment } from '@models/index';
import { generateKey } from '@utils/mainFeaturesUtils';
import { Box } from '@chakra-ui/react';
import { IssueModel } from '../../../models/index';

interface IProps {
  issue?: IssueModel;
  comments?: [];
}

const ListComments: React.FC<IProps> = ({ issue, comments }) => {
  return (
    <Box borderBottom='3px solid lightgrey' marginTop='20px'>
      {issue?.body && (
        <Box>
          <CommentBox
            userName={issue?.user?.login}
            userCommentTime={issue?.created_at?.split('T')[0]}
            userComment={issue?.body}
            userImage={issue?.user?.avatar_url}
            imageAlt={issue?.user?.avatar_url}
          />
          <Box borderLeft='4px solid lightgrey' h='50px' marginLeft={{ sm: '70px', md: '100px' }} />
        </Box>
      )}
      {comments?.length &&
        comments?.map((item: IComment) => {
          return (
            <>
              <CommentBox
                key={generateKey()}
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
            </>
          );
        })}
    </Box>
  );
};

export default ListComments;
