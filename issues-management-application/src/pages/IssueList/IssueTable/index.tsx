import Table from '@components/Table';
import { Box } from '@chakra-ui/react';
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';
import { useEffect } from 'react';
import { getAllIssue } from '@utils/mainFeaturesUtils';

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
