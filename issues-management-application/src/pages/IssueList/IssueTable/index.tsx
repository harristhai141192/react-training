import Table from '@components/Table';
import { Box } from '@chakra-ui/react';
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';

const IssueTable = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId, order }: IIssueStateProps = issueState;

  const issues = order.map((id) => byId[id]);

  return (
    <Box>
      <Table issues={issues} />
    </Box>
  );
};

export default IssueTable;
