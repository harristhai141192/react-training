// Libraries
import React, { Suspense } from 'react';

// Components
import ModalComponent from '@components/Modal';
import FormComponent from '@components/Form';
import LoadingSpinner from '@components/LoadingSpinner';

// Store
import { useMemberContext } from '@store/context';

// Modal
import { Member } from '@models/index';

interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  modalTitle?: string;
  memberId?: string;
}

const ModalFormComponent: React.FC<IProps> = ({
  isOpen,
  onClose,
  onSubmit,
  modalTitle,
  memberId,
}) => {
  // const data = memberId ? member : {}

  const [state] = useMemberContext();

  const member = state.members.find((item: Member) => item.id === memberId);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ModalComponent isOpen={isOpen} onClose={onClose} modalTitle={modalTitle}>
        <FormComponent
          formName=''
          onCancel={onClose}
          onSubmit={onSubmit}
          defaultMemberData={member}
          isLoading={state.loading}
        />
      </ModalComponent>
    </Suspense>
  );
};

export default ModalFormComponent;
