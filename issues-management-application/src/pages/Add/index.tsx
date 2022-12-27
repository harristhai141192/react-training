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
import { IIssueStateProps } from '@stores/Issue/issueReducer';

// Constants
import { PAGE_ROUTES } from '@constants/routes';

// Mock
import { rightSideBarData } from '@mockData/barData';

const AddIssue = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [issueState, dispatch] = useIssueContext();
  const [addSuccess, setAddSuccess] = useState(false);
  const navigate = useNavigate();
  const { order }: IIssueStateProps = issueState;

  const handleNaviGate = useCallback(
    (addSuccess: boolean) => {
      if (addSuccess) {
        setTimeout(() => {
          navigate(`${PAGE_ROUTES.DETAIL}/${order[order.length - 1]}`);
        }, 3000);
      }
    },
    [addSuccess],
  );

  useEffect(() => {
    handleNaviGate(addSuccess);
  }, [addSuccess]);

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
            <CreatedIssue handleOnSubmit={handleAddIssue} />
          </Box>
          <Box w={{ sm: '0', md: '20%' }}>{!isMobile && <DiscussionSideBar />}</Box>
        </Box>
      </Container>
    </>
  );
};

export default AddIssue;
