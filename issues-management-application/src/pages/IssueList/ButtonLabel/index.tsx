import { Button, Box, ButtonGroup, Link } from '@chakra-ui/react';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { VscMilestone } from 'react-icons/vsc';

const ButtonLabel = () => {
  return (
    <Box
      padding='20px 0px'
      display='flex'
      flexDirection='row'
      justifyContent='space-around'
      w={{ sm: '100%', md: '40%' }}
    >
      <ButtonGroup isAttached>
        <Button
          bgColor='white'
          height='32px'
          leftIcon={<BiPurchaseTagAlt />}
          variant='ghost'
          margin='0px'
        >
          Labels
        </Button>
        <Button
          bgColor='white'
          height='32px'
          leftIcon={<VscMilestone />}
          variant='ghost'
          margin='0px'
          borderLeft='none'
        >
          Milestones
        </Button>
      </ButtonGroup>
      <Button marginLeft='10px'>
        <Link>New Issue</Link>
      </Button>
    </Box>
  );
};

export default ButtonLabel;
