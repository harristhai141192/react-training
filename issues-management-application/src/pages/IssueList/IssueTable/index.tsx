// Components
import { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';

// Utils
import { getAllIssue } from '@utils/mainFeaturesUtils';

// Components
import Table from '@components/Table';

const IssueTable = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId, order }: IIssueStateProps = issueState;

  const issues = order?.length ? order?.map((id) => byId[id]) : [];

  useEffect(() => {
    getAllIssue(issueDispatch);
  }, [issueDispatch]);

  return (
    <Box>
      <Table issues={issues} />
    </Box>
  );
};

export default IssueTable;
