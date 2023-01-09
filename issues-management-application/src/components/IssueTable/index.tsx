// Components
import { memo, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import issueSelector from '@stores/Issue/selector';

// Utils
import { getAllIssue } from '@services/index';

// Components
import Table from '@components/Table';
import LoadingSpinner from '@components/LoadingSpinner';

const IssueTable = () => {
  const { dispatch } = useIssueContext();
  const issues = issueSelector.getAllIssues();
  const isLoading = issueSelector.isIssueLoading();

  useEffect(() => {
    getAllIssue(dispatch);
  }, [dispatch]);

  return <Box>{isLoading ? <LoadingSpinner /> : <Table issues={issues} />}</Box>;
};

export default memo(IssueTable);
