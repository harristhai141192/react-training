// Constants
import { API } from '@constants/apis';

// Services
import {
  fetchIssues,
  postIssueService,
  updateIssueService,
  getIssueService,
  updateLockStatusService,
  updateUnlockStatusService,
} from '@services/issueServices';

// Stores
import { ICommentActionProps } from '@stores/Comment/commentReducer';
import { IActionIssueProps } from '@stores/Issue/issueReducer';

// Services
import { getComments } from '@services/commentServices';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

// ISSUES FEATURES
export const getAllIssue = async (dispatch: (action: IActionIssueProps) => void) => {
  await fetchIssues(API.DELIVERY_CALL.URL_ISSUES, dispatch);
};

export const getIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId?: string,
) => {
  await getIssueService(
    `${API.DELIVERY_CALL.URL_ISSUES}/${currentId}&timestamp=${new Date().getTime()}`,
    dispatch,
  );
};

export const addIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  data: { title: string; body: string },
) => {
  const getData = {
    title: data.title,
    body: data.body,
  };

  await postIssueService(`${process.env.VITE_BASE_URL}/${API.PATHS.ISSUES}`, getData, dispatch);
};

export const updateIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId?: string,
  title?: string,
) => {
  updateIssueService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}`, title, dispatch);
};

export const lockIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId?: string,
  data?: { active_lock_reason: string },
) => {
  updateLockStatusService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}/lock`, data, dispatch);
};

export const unlockIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId?: string,
) => {
  updateUnlockStatusService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}/lock`, dispatch);
};

// COMMENT FEATURES
export const getCommentsById = async (
  dispatch: (action: ICommentActionProps) => void,
  currentId?: string,
) => {
  getComments(`${API.DELIVERY_CALL.URL_COMMENTS}/issues/${currentId}/comments`, dispatch);
};
