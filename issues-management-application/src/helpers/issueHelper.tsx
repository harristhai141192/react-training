// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Store
import { IActionIssueProps } from '../stores/Issue/issueReducer';

export const getAllIssueHelper = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (action: IActionIssueProps) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};

export const getIssueHelper = async (
  response: Response,
  dispatchActions: ISSUE_ACTIONS,
  dispatch: (action: IActionIssueProps) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};
