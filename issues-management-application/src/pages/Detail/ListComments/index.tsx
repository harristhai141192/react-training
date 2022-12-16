import React from 'react';
import CommentBox from '@components/CommentBox';
import { IssueModel } from '@models/index';
import { generateKey } from '@utils/mainFeaturesUtils';
import { Box } from '@chakra-ui/react';

interface IProps {
  issue: IssueModel;
}

const ListComments: React.FC<IProps> = ({ issue }) => {
  return (
    <Box borderBottom='3px solid lightgrey' marginTop='20px'>
      {issue.issueComment?.map((item) => {
        return (
          <>
            <CommentBox
              key={generateKey()}
              userName={issue.issueAuthor}
              userCommentTime={item.commentTime}
              userComment={item.comment}
              userImage={issue.issueAuthorImage}
              imageAlt={issue.issueAuthor}
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
