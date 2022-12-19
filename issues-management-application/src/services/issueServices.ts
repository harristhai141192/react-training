// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Models
import { IActionIssueProps } from '../stores/Issue/issueReducer';
import { getAllIssueHelper } from '../helpers/issueHelper';

/**
 * Get all the item in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getIssues = async (url: string, dispatch: (action: IActionIssueProps) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUE,
  });
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return getAllIssueHelper(response, ISSUE_ACTIONS.GET_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};
