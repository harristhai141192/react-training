// Libraries
import React, { useRef, useCallback } from 'react';
import { Box, UnorderedList, ListItem, Text, Select } from '@chakra-ui/react';

// Components
import Modal from '@components/Modal';

// Models
import { ILockReason } from '@models/index';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ILockReason) => void;
}

const LockIssueModal: React.FC<IProps> = ({ isOpen, onClose, onSubmit }) => {
  const selectEl = useRef<HTMLSelectElement | null>(null);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (selectEl?.current?.value) {
        onSubmit({ lockReason: selectEl.current.value });
      }
    },
    [selectEl],
  );
  console.log('selectEl', selectEl);

  return (
    <Modal
      title='Lock conversation'
      isOpen={isOpen}
      onClose={onClose}
      isLockModal={true}
      isLockIssue={false}
      onSubmit={handleSubmit}
    >
      <Box marginBottom='15px'>
        <UnorderedList fontSize='text.medium'>
          <ListItem>
            <Text>
              Other users <Text as='b'>can’t add new comments to this issue.</Text>
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              You and other collaborators with access to this repository
              <Text as='b'> can still leave comments</Text>
              that others can see.
            </Text>
          </ListItem>
          <ListItem>
            <Text>You can always unlock this issue again in the future.</Text>
          </ListItem>
        </UnorderedList>

        <Box marginTop='20px' w='50%' fontSize='text.medium'>
          <Text as='b'>Reason for locking</Text>
          <Select
            ref={selectEl}
            placeholder='Choose a reason'
            marginTop='10px'
            size='sm'
            id='lockReason'
          >
            <option value='off-topic'>Off-topic</option>
            <option value='resolved'>Resolved</option>
            <option value='spam'>Spam</option>
          </Select>
        </Box>
        <Text as='sub'>
          Optionally, choose a reason for locking that others can see. Learn more about when it’s
          appropriate to lock conversations.
        </Text>
      </Box>
    </Modal>
  );
};

export default LockIssueModal;
