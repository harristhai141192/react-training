// Libraries
import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

// Components
import ModalComponent from '@components/Modal';
import Button from '@components/Button';

interface IProps {
  isLoading?: boolean;
  isOpenDeleteModal?: boolean;
  onCloseDeleteModal?: () => void;
  onClickDelete?: () => void;
  onOpenDeleteModal?: () => void;
  onOpenSuccess?: boolean;
  memberId?: string;
}

const ModalDeleteComponent: React.FC<IProps> = ({
  isLoading,
  isOpenDeleteModal,
  onCloseDeleteModal,
  onClickDelete,
}) => {
  return (
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
          label='Yes'
          backgroundColor='crimson'
          onClick={onClickDelete}
        />
        <Button isLoading={isLoading} label='No' variant='outline' onClick={onCloseDeleteModal} />
      </Box>
    </ModalComponent>
  );
};

export default ModalDeleteComponent;
