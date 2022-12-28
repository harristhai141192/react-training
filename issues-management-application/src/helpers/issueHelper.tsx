// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Store
import { IActionIssueProps } from '@stores/Issue/issueReducer';
import { IssueModel } from '@models/index';

export const pushIssuesToStore = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (value: IActionIssueProps) => void,
) => {
  const issue: IssueModel = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};

export const pushAnIssueToStore = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (action: IActionIssueProps) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};
