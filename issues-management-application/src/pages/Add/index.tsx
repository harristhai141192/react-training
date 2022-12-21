import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import CreatedIssue from '@components/CreatedIssue';
import MenuBar from '@components/MenuBar';
import RightBar from '@components/RightBar';
import { addIssue } from '@utils/mainFeaturesUtils';
import { useIssueContext } from 'src/stores/Issue/context';
import { useNavigate } from 'react-router-dom';
import { PAGE_ROUTES } from '@constants/routes';
import { ISSUE_ACTIONS } from '../../constants/actions';
import { useState, useCallback, useEffect } from 'react';
import { IIssueStateProps } from '@stores/Issue/issueReducer';

const Add = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const [issueState, dispatch] = useIssueContext();
  const [addSuccess, setAddSuccess] = useState(false);
  const navigate = useNavigate();
  const { byId, order }: IIssueStateProps = issueState;

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
            {/* onSubmit = handleOnSubmit  */}
          </Box>
          <Box w={{ sm: '0', md: '20%' }}>{!isMobile && <RightBar />}</Box>
        </Box>
      </Container>
    </>
  );
};

export default Add;
