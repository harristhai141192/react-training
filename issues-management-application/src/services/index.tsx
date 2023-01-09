// Constants
import { HTTP_METHODS } from '@constants/httpMethods';
import { ISSUE_ACTIONS } from '@constants/actions';
import { COMMENT_ACTIONS } from '@constants/actions';
import { HEADERS } from '@constants/apis';
import { API } from '@constants/apis';

// Stores
import { CommentActions } from '@stores/Comment/reducer';
import { IssueAction } from '@stores/Issue/reducer';

// Services
import { IComment, IssueModel } from '@models/index';

// ISSUES FEATURES
// GET ALL ISSUE
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

// GET AN ISSUE
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

// ADD AN ISSUE
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

// UPDATE AN ISSUE
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

// LOCK AN ISSUE
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
      body: JSON.stringify({ lock_reason: data.lockReason }),
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

// UNLOCK AN ISSUE
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
// GET ALL COMMENTS BY ID
export const getCommentsById = async (
  dispatch: (action: CommentActions) => void,
  currentId?: string,
) => {
  dispatch({
    type: COMMENT_ACTIONS.GET_COMMENT,
  });
  try {
    const response = await fetch(
      `${API.DELIVERY_CALL.URL_COMMENTS}/${API.PATHS.ISSUES}/${currentId}/comments`,
      {
        method: HTTP_METHODS.GET,
        headers: HEADERS,
      },
    );
    if (response.status == 200) {
      const comments = await response.json();
      dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_SUCCESS, data: { comments } });
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.GET_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};

// ADD COMMENT
export const addComment = async (
  dispatch: (action: CommentActions) => void,
  currentId: string,
  data: {
    body: string;
  },
) => {
  dispatch({
    type: COMMENT_ACTIONS.ADD_COMMENT_REQUEST,
  });

  try {
    const response = await fetch(
      `${process.env.VITE_BASE_URL}/${API.PATHS.ISSUES}/${currentId}/${API.PATHS.COMMENT}`,
      {
        method: HTTP_METHODS.POST,
        headers: HEADERS,
        body: JSON.stringify(data),
      },
    );

    if (response.status == 201) {
      const res = await response.json();
      const getData: IComment = {
        id: res.id,
        body: data.body,
        created_at: res.created_at,
        user: res.user,
      };
      dispatch({
        type: COMMENT_ACTIONS.ADD_COMMENT_SUCCESS,
        data: {
          comment: getData,
        },
      });
    }
  } catch (e) {
    dispatch({ type: COMMENT_ACTIONS.ADD_COMMENT_FAILURE, data: { error: (e as Error).message } });
  }
};
