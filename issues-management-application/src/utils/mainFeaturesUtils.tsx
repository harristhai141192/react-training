// Constants
import { HTTP_METHODS } from '@constants/httpMethods';
import { ISSUE_ACTIONS } from '@constants/actions';
import { HEADERS } from '@constants/apis';
import { API } from '@constants/apis';

// Services
import {
  fetchIssues,
  postIssueService,
  updateIssueService,
  getIssueService,
  updateUnlockStatusService,
} from '@services/issueServices';

// Stores
import { CommentActions } from '@stores/Comment/commentReducer';
import { IssueAction } from '@stores/Issue/issueReducer';

// Services
import { getComments } from '@services/commentServices';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

// ISSUES FEATURES
export const getAllIssue = async (dispatch: (action: IssueAction) => void) => {
  await fetchIssues(API.DELIVERY_CALL.URL_ISSUES, dispatch);
};

export const getIssue = async (dispatch: (action: IssueAction) => void, currentId?: string) => {
  await getIssueService(
    `${API.DELIVERY_CALL.URL_ISSUES}/${currentId}&timestamp=${new Date().getTime()}`,
    dispatch,
  );
};

export const addIssue = async (
  dispatch: (action: IssueAction) => void,
  data: { title: string; body: string },
) => {
  const getData = {
    title: data.title,
    body: data.body,
  };

  await postIssueService(`${process.env.VITE_BASE_URL}/${API.PATHS.ISSUES}`, getData, dispatch);
};

export const updateIssue = async (
  dispatch: (action: IssueAction) => void,
  currentId?: string,
  title?: string,
) => {
  updateIssueService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}`, title, dispatch);
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

export const unlockIssue = async (dispatch: (action: IssueAction) => void, currentId?: string) => {
  updateUnlockStatusService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}/lock`, dispatch);
};

// COMMENT FEATURES
export const getCommentsById = async (
  dispatch: (action: CommentActions) => void,
  currentId?: string,
) => {
  getComments(`${API.DELIVERY_CALL.URL_COMMENTS}/issues/${currentId}/comments`, dispatch);
};
