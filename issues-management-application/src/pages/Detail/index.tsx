import { Box, Button, Container, FormControl, Heading, Input, Text } from '@chakra-ui/react';
import AddCommentBox from '@components/AddCommentBox';
import FeatureBar from '@components/FeatureBar';
import RightBar from '@components/RightBar';
import Status from '@components/Status';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';
import { lockIssue, updateIssue } from '../../utils/mainFeaturesUtils';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import ModalIssue from '@components/ModalIssue';
import DeleteModal from './DeleteModal';
import { getIssue } from '@utils/mainFeaturesUtils';
import { getIssues } from '../../services/issueServices';

const Detail: React.FC<IProps> = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId }: IIssueStateProps = issueState;
  const [isEditting, setIsEditting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpenLockModal, setIsOpenLockModal] = useState(false);
  const { register, handleSubmit } = useForm();

  const params = useParams();
  const currentID = params.id;

  useEffect(() => {
    if (currentID) {
      getIssue(issueDispatch, currentID);
    }
  }, [currentID]);

  useEffect(() => {});
  const getAnIssue = byId;

  const handleCancelEdit = () => {
    setIsEditting(false);
  };

  const handleOnEditIssue = () => {
    setIsEditting(true);
  };

  const handleSaveIssue = async (title: string) => {
    updateIssue(issueDispatch, currentID, title);
    setIsEditting(false);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleting(true);
  };

  const handleDeleteIssue = () => {};

  const handleOpenLockIssueModal = () => {
    setIsOpenLockModal(true);
  };

  const handleLockIssue = (data: string) => {
    lockIssue(issueDispatch, currentID, {
      lock_reason: data?.lockReason,
    });
    setIsOpenLockModal(false);
  };

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
        {isOpenLockModal && (
          <ModalIssue
            isOpen={true}
            onClose={() => setIsOpenLockModal(false)}
            onSubmit={handleLockIssue}
          />
        )}
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
            <FeatureBar
              isLock={getAnIssue?.locked}
              onLockIssue={handleOpenLockIssueModal}
              onEditIssue={handleOnEditIssue}
              onDeleteIssue={handleOpenDeleteModal}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
