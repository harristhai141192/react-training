// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Store
import { IssueAction } from '@stores/Issue/issueReducer';

export const pushIssuesToStore = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (value: IssueAction) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};

export const pushAnIssueToStore = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (action: IssueAction) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};
