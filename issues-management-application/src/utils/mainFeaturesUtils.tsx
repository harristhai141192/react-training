import { API } from '@constants/apis';
import {
  getIssues,
  postIssueService,
  updateIssueService,
  getIssueService,
} from '@services/issueServices';
import { IActionIssueProps } from '../stores/Issue/issueReducer';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

export const getAllIssue = async (dispatch: (action: IActionIssueProps) => void) => {
  await getIssues(API.DELIVERY_CALL.URL_ISSUES, dispatch);
};

export const getIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId: string,
) => {
  await getIssueService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}`, dispatch);
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
  currentId: string,
  title: string,
) => {
  updateIssueService(`${API.DELIVERY_CALL.URL_ISSUES}/${currentId}`, title, dispatch);
};

export const deleteIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  currentId: string,
) => {};
