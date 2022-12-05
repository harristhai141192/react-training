// Libraries
import React, { Suspense } from 'react';
import { Box, Text, Button } from '@chakra-ui/react';

// Store
import { useMemberContext } from '@store/context';

// Components
import ModalComponent from '@components/Modal';
import LoadingSpinner from '@components/LoadingSpinner';

interface IProps {
  isOpenDeleteModal?: boolean;
  onCloseDeleteModal?: () => void;
  onClickDelete?: () => void;
  onOpenDeleteModal?: () => void;
  onOpenSuccess?: boolean;
  memberId?: string;
}

const ModalDeleteComponent: React.FC<IProps> = ({
  isOpenDeleteModal,
  onCloseDeleteModal,
  onClickDelete,
}) => {
  const [state] = useMemberContext();

  const isLoading = state.loading;

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ModalComponent
        isOpen={isOpenDeleteModal}
        onClose={onCloseDeleteModal}
        modalTitle='Delete Member Board'
      >
        <Box display='flex' flexDirection='row' fontFamily='RalewayLight'>
          <Text>Do you want to delete ?</Text>
        </Box>
        <Box display='flex' flexDirection='row' justifyContent='flex-end' margin='30px 0'>
          <Button
            isLoading={isLoading}
            loadingText='Submitting'
            backgroundColor='crimson'
            onClick={onClickDelete}
          >
            Yes
          </Button>
          <Button isLoading={isLoading} variant='outline' onClick={onCloseDeleteModal}>
            No
          </Button>
        </Box>
      </ModalComponent>
    </Suspense>
  );
};

export default ModalDeleteComponent;
