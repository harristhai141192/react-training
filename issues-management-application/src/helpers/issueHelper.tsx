// Store
import { ACTIONS } from '@constants/actions';
import { IActionIssueProps } from '../stores/Issue/issueReducer';

export const getAllIssueHelper = async (
  response: Response,
  dispatchActions: ACTIONS,
  dispatch: (action: IActionIssueProps) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};

export const getMemberHelper = async (
  response: Response,
  dispatchActions: ACTIONS,
  dispatch: (action: IActionIssueProps) => void,
) => {
  const issue = await response.json();

  dispatch({ type: dispatchActions, data: { issue } });
};
