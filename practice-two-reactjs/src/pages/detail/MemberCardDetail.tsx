// Libraries
import React from 'react';

// Components
import MemberCard from '@components/MemberCard';
import Button from '@components/Button';

// Modal
import { Member } from '@models/index';

// Store
import { useMemberContext } from '@store/context';

interface IProps {
  isOpen?: boolean;
  onClose?: () => void;
  onOpenEdit: (id: string) => void;
  onOpenDelete?: () => void;
  memberId: string;
}

const MemberCardDetail: React.FC<IProps> = ({
  isOpen,
  onClose,
  onOpenEdit,
  onOpenDelete,
  memberId,
}) => {
  const [state] = useMemberContext();
  const member = state.members.find((item: Member) => {
    return item.id === memberId;
  });

  return (
    <MemberCard isOpen={isOpen} onClose={onClose} modalTitle='Member Detail' member={member}>
      <Button
        label='Edit'
        variant='outline'
        width='100%'
        marginRight='5px'
        onClick={() => onOpenEdit(memberId)}
      />
      <Button
        label='Delete'
        variant='solid'
        backgroundColor='crimson'
        width='100%'
        marginRight='0'
        padding='0'
        onClick={onOpenDelete}
      />
    </MemberCard>
  );
};

export default MemberCardDetail;
