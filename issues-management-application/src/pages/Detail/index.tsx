// Libraries
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Box, Button, Container, FormControl, Heading, Input, Text } from '@chakra-ui/react';

// Components
import AddCommentBox from '@components/AddCommentBox';
import FeatureBar from '@components/FeatureBar';
import RightBar from '@components/RightBar';
import Status from '@components/Status';
import ModalIssue from '@components/ModalIssue';
import DeleteModal from './DeleteModal';
import UnlockModal from './UnlockModal';
import ListComments from './ListComments';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import { useCommentContext } from '@stores/Comment/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';

// Utils
import {
  getCommentsById,
  lockIssue,
  unlockIssue,
  updateIssue,
  getIssue,
} from '@utils/mainFeaturesUtils';

const Detail = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const [commentState, commentDispatch] = useCommentContext();

  const { byId }: IIssueStateProps = issueState;
  const [isEditting, setIsEditting] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpenLockModal, setIsOpenLockModal] = useState(false);
  const [isOpenUnlockModal, setIsOpenUnlockModal] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const { register, handleSubmit } = useForm();
  const getComments = commentState.comments;
  const params = useParams();
  const currentID = params.id;

  useEffect(() => {
    if (currentID) {
      getIssue(issueDispatch, currentID);
      getCommentsById(commentDispatch, currentID);
    }
  }, [currentID]);

  const getAnIssue = byId;

  // CANCEL INPUT EDITING ISSUE
  const handleCancelEdit = () => {
    setIsEditting(false);
  };

  // OPEN INPUT EDITING ISSUE
  const handleOnEditIssue = () => {
    setIsEditting(true);
  };

  // SAVING ISSUE VALUE EDITED
  const handleSaveIssue = async (title: string) => {
    updateIssue(issueDispatch, currentID, title);
    setIsEditting(false);
  };

  // RE-FETCH ISSUE AFTER ACTION LOCKED
  const handleRefetchIssue = useCallback(
    (isLocked, currentID) => {
      if (isLocked && currentID) {
        setTimeout(() => {
          getIssue(issueDispatch, currentID);
        }, 3000);
      }
    },
    [isLocked, currentID],
  );

  useEffect(() => {
    handleRefetchIssue(isLocked, currentID);
  }, [isLocked, currentID]);

  // OPEN DELETE MODAL
  const handleOpenDeleteModal = () => {
    setIsDeleting(true);
  };

  // OPEN LOCK ISSUE MODAL
  const handleOpenLockIssueModal = () => {
    setIsOpenLockModal(true);
  };

  // HANDLE LOCK ISSUE FEATURE
  const handleLockIssue = (data: string) => {
    lockIssue(issueDispatch, currentID, {
      lock_reason: data?.lockReason,
    });
    setIsOpenLockModal(false);
    setIsLocked((prev) => !prev);
  };

  // OPEN UNLOCK ISSUE MODAL
  const handleOpenUnlockIssueModal = () => {
    setIsOpenUnlockModal(true);
  };

  // HANDLE UNLOCK ISSUE MODAL
  const handleUnlockIssue = () => {
    unlockIssue(issueDispatch, currentID);
    setIsOpenUnlockModal(false);
    setIsLocked((prev) => !prev);
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
      {isOpenLockModal && (
        <ModalIssue
          isOpen={isOpenLockModal}
          onClose={() => setIsOpenLockModal(false)}
          onSubmit={handleLockIssue}
        />
      )}
      {isOpenUnlockModal && (
        <UnlockModal
          onUnlock={handleUnlockIssue}
          isOpen={true}
          onClose={() => setIsOpenUnlockModal(false)}
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
            <ListComments issue={getAnIssue} comments={getComments} />
            <AddCommentBox userImage={getAnIssue?.user?.avatar_url} />
          </Box>
          <Box w='30%'>
            <RightBar />
            <FeatureBar
              isLock={getAnIssue?.locked}
              onLockIssue={handleOpenLockIssueModal}
              onEditIssue={handleOnEditIssue}
              onDeleteIssue={handleOpenDeleteModal}
              onUnLockIssue={handleOpenUnlockIssueModal}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Detail;
