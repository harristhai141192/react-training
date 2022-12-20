import { Button, Box, ButtonGroup } from '@chakra-ui/react';
import { PAGE_ROUTES } from '@constants/routes';
import { BiPurchaseTagAlt } from 'react-icons/bi';
import { VscMilestone } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

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
      <Link to={PAGE_ROUTES.ADD}>
        <Button marginLeft='10px'>New Issue</Button>
      </Link>
    </Box>
  );
};

export default ButtonLabel;
