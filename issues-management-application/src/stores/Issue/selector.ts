import { useIssueContext } from './context';

const getIssueById = (currentId: string) => {
  const { state } = useIssueContext();
  return state.byId[currentId];
};

const isIssueLoading = () => {
  const { state } = useIssueContext();
  return state.loading;
};

const getAllIssues = () => {
  const { state } = useIssueContext();
  return state.order?.map((id) => state.byId[id]);
};

export default { getIssueById, isIssueLoading, getAllIssues };
