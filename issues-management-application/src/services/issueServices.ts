// Constants
import { ISSUE_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';

// Stores
import { IssueAction } from '@stores/Issue/issueReducer';

// Helpers
import { pushIssuesToStore, pushAnIssueToStore } from '@helpers/issueHelper';
import { HEADERS } from '@constants/apis';

export const fetchIssues = async (url: string, dispatch: (action: IssueAction) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUES,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });

    if (response.status == 200) {
      pushIssuesToStore(response, ISSUE_ACTIONS.GET_ISSUES_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_ISSUES_FAILURE, data: { error: (e as Error).message } });
  }
};

export const getIssueService = async (url: string, dispatch: (action: IssueAction) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_AN_ISSUE,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    if (response.status == 200) {
      pushAnIssueToStore(response, ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const postIssueService = async (
  url: string,
  data: {
    title: string;
    body: string;
  },
  dispatch: (action: IssueAction) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.ADD_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.POST,
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (response.status == 201) {
      pushAnIssueToStore(response, ISSUE_ACTIONS.ADD_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.ADD_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};
