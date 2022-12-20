import { Box, Button, Container, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import AddCommentBox from '@components/AddCommentBox';
import FeatureBar from '@components/FeatureBar';
import RightBar from '@components/RightBar';
import Status from '@components/Status';
import { IssueModel } from '@models/index';
import React from 'react';
import ListComments from './ListComments';
import { useParams } from 'react-router-dom';
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';
import { useEffect, useState } from 'react';
import { getAllIssue } from '@utils/mainFeaturesUtils';

const Detail: React.FC<IProps> = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId }: IIssueStateProps = issueState;
  const [isEditting, setIsEditting] = useState(false);

  const params = useParams();

  const getIssue = byId[params.id];

  useEffect(() => {
    getAllIssue(issueDispatch);
  }, []);

  const handleCancelEdit = () => {
    setIsEditting(false);
  };

  const handleOnEditIssue = () => {
    setIsEditting(true);
  };

  return (
    <Container as='body' padding='20px 0'>
      <Box>
        <Heading as='h2'>
          {isEditting ? (
            <Box display='flex' flexDirection='row'>
              <form>
                <FormControl>
                  <Input placeholder='Please enter new title' defaultValue={getIssue?.title} />
                  <Button>Save</Button>
                  <Button onClick={handleCancelEdit}>Cancel</Button>
                </FormControl>
              </form>
            </Box>
          ) : (
            getIssue?.title
          )}
          #{getIssue?.number}
        </Heading>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          borderBottom='1px solid lightgrey'
          paddingBottom='15px'
        >
          <Status isOpen={!getIssue?.locked} />
          <Text marginLeft='10px'>
            <Text as='b'>{getIssue?.user?.login}&nbsp;</Text>
            {!getIssue?.locked ? 'opened this issue on' : 'closed this issue on'}&nbsp;
            {getIssue?.created_at?.split('T')[0]}
          </Text>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box w='65%'>
            {/* <ListComments /> */}
            <AddCommentBox userImage={getIssue?.user?.avatar_url} />
          </Box>
          <Box w='30%'>
            <RightBar />
            <FeatureBar onEditIssue={handleOnEditIssue} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
