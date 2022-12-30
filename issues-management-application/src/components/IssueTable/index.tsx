// Components
import { memo, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import { IIssueStateProps } from '@stores/Issue/issueReducer';

// Utils
import { getAllIssue } from '@utils/mainFeaturesUtils';

// Components
import Table from '@components/Table';
import LoadingSpinner from '@components/LoadingSpinner';

const IssueTable = () => {
  const [issueState, issueDispatch] = useIssueContext();
  const { byId, loading, order }: IIssueStateProps = issueState;
  const issues = order?.length ? order?.map((id) => byId[id]) : [];

  useEffect(() => {
    getAllIssue(issueDispatch);
  }, [issueDispatch]);

  return <Box>{loading ? <LoadingSpinner /> : <Table issues={issues} />}</Box>;
};

export default memo(IssueTable);
