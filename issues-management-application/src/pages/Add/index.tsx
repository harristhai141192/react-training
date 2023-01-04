// Libraries
import { useState, useCallback, useEffect } from 'react';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

// Components
import CreatedIssue from '@components/CreatedIssue';
import MenuBar from '@components/MenuBar';
import DiscussionSideBar from '@components/DiscussionSideBar';

// Utils
import { addIssue } from '@utils/mainFeaturesUtils';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import { IssueState } from '@stores/Issue/issueReducer';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

const AddIssue = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { state, dispatch } = useIssueContext();
  const [addSuccess, setAddSuccess] = useState(false);
  const navigate = useNavigate();
  const { order }: IssueState = state;

  // Navigate after successfully added
  const handleNaviGate = useCallback(
    (addSuccess: boolean) => {
      if (addSuccess) {
        navigate(`${PAGE_ROUTES.DETAIL}/${order[order.length - 1]}`);
      }
    },
    [addSuccess, order],
  );

  // Calling navigation in case addSuccess changing
  useEffect(() => {
    handleNaviGate(addSuccess);
  }, [addSuccess]);

  // Add issue function, calling and dispatch data
  const handleAddIssue = async (data: { title: string; body: string }) => {
    await addIssue(dispatch, data);
    setAddSuccess(true);
  };

  return (
    <>
      <Box padding='5px 25px' bgColor='mainBackground' borderBottom='1px solid lightgrey'>
        <MenuBar />
      </Box>
      <Container maxW='8xl'>
        <Box
          display='flex'
          flexDirection='row'
          marginTop='30px'
          justifyContent={{ sm: 'center', md: 'space-between' }}
        >
          <Box w={{ sm: '90%', md: '73%' }}>
            <CreatedIssue
              userImage='https://avatars.githubusercontent.com/u/70429146?v=4'
              handleOnSubmit={handleAddIssue}
            />
          </Box>
          <Box w={{ sm: '0', md: '20%' }}>{!isMobile && <DiscussionSideBar />}</Box>
        </Box>
      </Container>
    </>
  );
};

export default AddIssue;
