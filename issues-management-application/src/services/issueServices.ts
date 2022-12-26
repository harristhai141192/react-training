// Constants
import { ISSUE_ACTIONS } from '@constants/actions';
import { HTTP_METHODS } from '@constants/httpMethods';

// Models
import { IssueModel } from '@models/index';

// Stores
import { IActionIssueProps } from '@stores/Issue/issueReducer';

// Helpers
import { getAllIssueHelper, getIssueHelper } from '@helpers/issueHelper';

export const getIssues = async (url: string, dispatch: (action: IActionIssueProps) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUE,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      // TODO: CHANGE HEADER BY DEFINED HEADER IN HTTPMETHODS
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
    });
    if (response.status == 200) {
      return getAllIssueHelper(response, ISSUE_ACTIONS.GET_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_ISSUE_FAILURE, data: { error: (e as Error).message } });
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
    const headers = {
      'Content-Type': 'text/plain',
      Accept: 'application/vnd.github.v3.raw',
      Authorization: `Bearer ${process.env.VITE_TOKEN}`,
    };

    const response = await fetch(url, {
      method: HTTP_METHODS.GET,
      headers,
    });

    if (response.status == 200) {
      return getIssueHelper(response, ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const postIssueService = async (
  url: string,
  data: IssueModel,
  dispatch: (action: IActionIssueProps) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.ADD_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.POST,
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify(data),
    });

    if (response.status == 201) {
      await getIssueHelper(response, ISSUE_ACTIONS.ADD_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.ADD_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateIssueService = async (
  url: string,
  title: string,
  dispatch: (action: IActionIssueProps) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST,
  });

  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PATCH,
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify(title),
    });
    if (response.status == 200) {
      return getIssueHelper(response, ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateLockStatusService = async (
  url: string,
  data: { active_lock_reason: string },
  dispatch: (action: IActionIssueProps) => void,
) => {
  dispatch({
    type: ISSUE_ACTIONS.LOCK_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PUT,
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },

      body: JSON.stringify(data),
    });

    if (response.status == 204) {
      return getIssueHelper(response, ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
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
      headers: {
        Authorization: `token ${process.env.VITE_TOKEN}`,
        'Content-Type': 'application/json',
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (response.status == 204) {
      return getIssueHelper(response, ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};
