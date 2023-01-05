// Components
import { memo, useEffect } from 'react';
import { Box } from '@chakra-ui/react';

// Stores
import { useIssueContext } from '@stores/Issue/context';
import { IssueState } from '@stores/Issue/issueReducer';

// Utils
import { getAllIssue } from '@utils/mainFeaturesUtils';

// Components
import Table from '@components/Table';
import LoadingSpinner from '@components/LoadingSpinner';

const IssueTable = () => {
  const { state, dispatch } = useIssueContext();
  const { byId, loading, order }: IssueState = state;
  const issues = order?.length ? order?.map((id) => byId[id]) : [];

  useEffect(() => {
    getAllIssue(dispatch);
  }, [dispatch]);

  return <Box>{loading ? <LoadingSpinner /> : <Table issues={issues} />}</Box>;
};

export default memo(IssueTable);
