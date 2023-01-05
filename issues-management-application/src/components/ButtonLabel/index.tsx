// Libraries
import { Button, Box, ButtonGroup } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BellIcon, InfoOutlineIcon } from '@chakra-ui/icons';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

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
        <Button bgColor='white' height='32px' leftIcon={<BellIcon />} variant='ghost' margin='0px'>
          Labels
        </Button>
        <Button
          bgColor='white'
          height='32px'
          leftIcon={<InfoOutlineIcon />}
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
