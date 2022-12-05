// Libraries
import React from 'react';
import { Button } from '@chakra-ui/button';

// Components
import MemberCard from '@components/MemberCard';

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
        variant='outline'
        width='100%'
        marginRight='5px'
        padding='0px 10px'
        onClick={() => onOpenEdit(memberId)}
      >
        Edit
      </Button>
      <Button
        variant='solid'
        backgroundColor='crimson'
        width='100%'
        marginRight='0'
        padding='0px 10px'
        onClick={onOpenDelete}
      >
        Delete
      </Button>
    </MemberCard>
  );
};

export default MemberCardDetail;
