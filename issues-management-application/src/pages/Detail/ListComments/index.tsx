import React from 'react';
import CommentBox from '@components/CommentBox';
import { IComment, IssueModel } from '@models/index';
import { generateKey } from '@utils/mainFeaturesUtils';
import { Box } from '@chakra-ui/react';

interface IProps {
  issue: IssueModel;
}

const ListComments: React.FC<IProps> = ({ issue }) => {
  return (
    <Box borderBottom='3px solid lightgrey' marginTop='20px'>
      {issue.issueComment?.map((item: IComment) => {
        return (
          <>
            <CommentBox
              key={generateKey()}
              userName={issue.user?.login}
              userCommentTime={item.created_at}
              userComment={item.body}
              userImage={issue.user?.avatar_url}
              imageAlt={issue.user?.avatar_alt}
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
