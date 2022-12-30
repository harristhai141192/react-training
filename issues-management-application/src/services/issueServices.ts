// Constants
import { ISSUE_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';

// Stores
import { IActionIssueProps } from '@stores/Issue/issueReducer';

// Helpers
import { pushIssuesToStore, pushAnIssueToStore } from '@helpers/issueHelper';
import { HEADERS } from '@constants/apis';

export const fetchIssues = async (url: string, dispatch: (action: IActionIssueProps) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUES,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    if (response.status == 200) {
      return pushIssuesToStore(response, ISSUE_ACTIONS.GET_ISSUES_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_ISSUES_FAILURE, data: { error: (e as Error).message } });
  }
};

export const getIssueService = async (
  url: string,
  dispatch: (action: IActionIssueProps) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_AN_ISSUE,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    if (response.status == 200) {
      return pushAnIssueToStore(response, ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS, dispatch);
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
  dispatch: (action: IActionIssueProps) => void,
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
      await pushAnIssueToStore(response, ISSUE_ACTIONS.ADD_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.ADD_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateIssueService = async (
  url: string,
  title?: string,
  dispatch?: (action: IActionIssueProps) => void,
) => {
  dispatch &&
    dispatch({
      type: ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST,
    });

  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PATCH,
      headers: HEADERS,
      body: JSON.stringify(title),
    });
    if (response.status == 200 && dispatch) {
      return pushAnIssueToStore(response, ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch &&
      dispatch({ type: ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateLockStatusService = async (
  url: string,
  data?: { active_lock_reason: string },
  dispatch?: (action: IActionIssueProps) => void,
) => {
  dispatch &&
    dispatch({
      type: ISSUE_ACTIONS.LOCK_ISSUE_REQUEST,
    });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PUT,
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (response.status == 204 && dispatch) {
      return pushAnIssueToStore(response, ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch &&
      dispatch({ type: ISSUE_ACTIONS.LOCK_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateUnlockStatusService = async (
  url: string,
  dispatch: (action: IActionIssueProps) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.UNLOCK_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.DELETE,
      headers: HEADERS,
    });

    if (response.status == 204) {
      return pushAnIssueToStore(response, ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};
