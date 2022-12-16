import { Box, Container, Heading, Text } from '@chakra-ui/react';
import AddCommentBox from '@components/AddCommentBox';
import FeatureBar from '@components/FeatureBar';
import RightBar from '@components/RightBar';
import Status from '@components/Status';
import { IssueModel } from '@models/index';
import React from 'react';
import ListComments from './ListComments';

interface IProps {
  issue: IssueModel;
}

const Detail: React.FC<IProps> = ({ issue }) => {
  return (
    <Container as='body' padding='20px 0'>
      <Box>
        <Heading as='h2'>
          {issue.issueName} #{issue.issueId}
        </Heading>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          borderBottom='1px solid lightgrey'
          paddingBottom='15px'
        >
          <Status isOpen={issue.issueStatus} />
          <Text marginLeft='10px'>
            <Text as='b'>{issue.issueAuthor}&nbsp;</Text>
            {issue.issueStatus ? 'opened this issue on' : 'closed this issue on'}&nbsp;
            {issue.issueCreatedTime}
          </Text>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box w='65%'>
            <ListComments issue={issue} />
            <AddCommentBox userImage={issue.issueAuthorImage} />
          </Box>
          <Box w='30%'>
            <RightBar />
            <FeatureBar />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
