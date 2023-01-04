// Constants
import { HTTP_METHODS } from '@constants/httpMethods';
import { ISSUE_ACTIONS } from '@constants/actions';
import { COMMENT_ACTIONS } from '@constants/actions';
import { HEADERS } from '@constants/apis';
import { API } from '@constants/apis';

// Stores
import { CommentActions } from '@stores/Comment/commentReducer';
import { IssueAction } from '@stores/Issue/issueReducer';

// Services
import { IssueModel } from '@models/index';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

// ISSUES FEATURES
export const getAllIssue = async (dispatch: (action: IssueAction) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUES,
  });
  try {
    const response = await fetch(`${API.DELIVERY_CALL.URL_ISSUES}?page=1&per_page=50`, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
      cache: 'no-cache',
    });

    if (response.status == 200) {
      const issue = await response.json();
      dispatch({ type: ISSUE_ACTIONS.GET_ISSUES_SUCCESS, data: { issue } });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_ISSUES_FAILURE, data: { error: (e as Error).message } });
  }
};

export const getIssue = async (dispatch: (action: IssueAction) => void, currentId?: string) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_AN_ISSUE,
  });
  try {
    const response = await fetch(
      `${API.DELIVERY_CALL.URL_ISSUES}/${currentId}&timestamp=${new Date().getTime()}`,
      {
        method: HTTP_METHODS.GET,
        headers: HEADERS,
      },
    );
    if (response.status == 200) {
      const issue = await response.json();
      dispatch({ type: ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS, data: { issue } });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const addIssue = async (
  dispatch: (action: IssueAction) => void,
  data: { title: string; body: string },
) => {
  dispatch({
    type: ISSUE_ACTIONS.ADD_ISSUE_REQUEST,
  });

  try {
    const response = await fetch(`${process.env.VITE_BASE_URL}/${API.PATHS.ISSUES}`, {
      method: HTTP_METHODS.POST,
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (response.status == 201) {
      const res = await response.json();
      const getData: IssueModel = {
        title: data.title,
        body: data.body,
        number: res.number,
      };
      dispatch({
        type: ISSUE_ACTIONS.ADD_ISSUE_SUCCESS,
        data: { issue: getData },
      });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.ADD_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const updateIssue = async (
  dispatch: (action: IssueAction) => void,
  currentId: string,
  data: { title: string },
) => {
  dispatch({
    type: ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST,
  });

  try {
    const response = await fetch(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}`, {
      method: HTTP_METHODS.PATCH,
      headers: HEADERS,
      body: JSON.stringify(data),
    });

    if (response.status == 200) {
      dispatch({
        type: ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS,
        data: { currentId: currentId, title: data.title },
      });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const lockIssue = async (
  dispatch: (action: IssueAction) => void,
  currentId: string,
  data: { lockReason: string },
) => {
  dispatch({
    type: ISSUE_ACTIONS.LOCK_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}/lock`, {
      method: HTTP_METHODS.PUT,
      headers: HEADERS,
      body: JSON.stringify({ active_lock_reason: data.lockReason }),
    });

    if (response.status == 204) {
      dispatch({
        type: ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS,
        data: { currentId: currentId, lockReason: data.lockReason },
      });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.LOCK_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const unlockIssue = async (dispatch: (action: IssueAction) => void, currentId: string) => {
  dispatch({
    type: ISSUE_ACTIONS.UNLOCK_ISSUE_REQUEST,
  });
  try {
    const response = await fetch(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}/lock`, {
      method: HTTP_METHODS.DELETE,
      headers: HEADERS,
    });

    if (response.status == 204) {
      dispatch({
        type: ISSUE_ACTIONS.UNLOCK_ISSUE_SUCCESS,
        data: { currentId: currentId, locked: false },
      });
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

// COMMENT FEATURES
export const getCommentsById = async (
  dispatch: (action: CommentActions) => void,
  currentId?: string,
) => {
  dispatch({
    type: COMMENT_ACTIONS.GET_COMMENT,
  });
  try {
    const response = await fetch(`${API.DELIVERY_CALL.URL_COMMENTS}/issues/${currentId}/comments`, {
      method: HTTP_METHODS.GET,
      headers: HEADERS,
    });
    if (response.status == 200) {
      const comments = await response.json();
      dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_SUCCESS, data: { comments } });
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};
