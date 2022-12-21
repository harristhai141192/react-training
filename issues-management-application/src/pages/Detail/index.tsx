import { Box, Button, Container, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import AddCommentBox from '@components/AddCommentBox';
import FeatureBar from '@components/FeatureBar';
import RightBar from '@components/RightBar';
import Status from '@components/Status';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';
import { updateIssue } from '../../utils/mainFeaturesUtils';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import DeleteModal from './DeleteModal';
import { getIssue } from '@utils/mainFeaturesUtils';

const Detail: React.FC<IProps> = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId }: IIssueStateProps = issueState;
  const [isEditting, setIsEditting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { register, handleSubmit } = useForm();

  const params = useParams();

  useEffect(() => {
    getIssue(issueDispatch, params.id);
  }, []);

  const getAnIssue = byId[params.id];

  const handleCancelEdit = () => {
    setIsEditting(false);
  };

  const handleOnEditIssue = () => {
    setIsEditting(true);
  };

  const handleSaveIssue = async (title: string) => {
    console.log('title', title);
    updateIssue(issueDispatch, getAnIssue.number, title);
    setIsEditting(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleting(true);
  };

  const handleDeleteIssue = () => {};

  return (
    <Container padding='20px 0'>
      {isDeleting && (
        <DeleteModal
          onDelete={handleDeleteIssue}
          isOpen={true}
          onClose={() => setIsDeleting(false)}
        />
      )}
      <Box>
        <Heading
          as='h2'
          display='flex'
          flexDirection='row'
          fontSize={{ sm: 'text.medium', md: 'text.large' }}
        >
          {isEditting ? (
            <form onSubmit={handleSubmit(handleSaveIssue)}>
              <FormControl display='flex' flexDirection='row' alignItems='center'>
                <Input
                  placeholder='Please enter new title'
                  defaultValue={getAnIssue?.title}
                  {...register('title')}
                />
                <Box display='flex' flexDirection='row' alignContent='center' margin='10px'>
                  <Button
                    size='sm'
                    type='submit'
                    variant='ghost'
                    bgColor='statusColor.green'
                    color='white'
                    _hover={{ color: 'black', bgColor: 'lightgrey' }}
                    marginRight='5px'
                  >
                    Save
                  </Button>
                  <Button size='sm' variant='ghost' onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                </Box>
              </FormControl>
            </form>
          ) : (
            getAnIssue?.title
          )}
          {isEditting ? '' : `#${getAnIssue?.number}`}
        </Heading>
        <Box
          display='flex'
          flexDirection='row'
          alignItems='center'
          borderBottom='1px solid lightgrey'
          paddingBottom='15px'
          marginTop='10px'
        >
          <Status isOpen={!getAnIssue?.locked} />
          <Text marginLeft='10px'>
            <Text as='b'>{getAnIssue?.user?.login}&nbsp;</Text>
            {!getAnIssue?.locked ? 'opened this issue on' : 'closed this issue on'}&nbsp;
            {getAnIssue?.created_at?.split('T')[0]}
          </Text>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box w='65%'>
            {/* <ListComments /> */}
            <AddCommentBox userImage={getAnIssue?.user?.avatar_url} />
          </Box>
          <Box w='30%'>
            <RightBar />
            <FeatureBar onEditIssue={handleOnEditIssue} onDeleteIssue={handleOpenDeleteModal} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
