import { API } from '@constants/apis';
import { getIssues, postIssue } from '@services/issueServices';
import { IActionIssueProps } from '../stores/Issue/issueReducer';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

export const getAllIssue = async (dispatch: (action: IActionIssueProps) => void) => {
  getIssues(API.DELIVERY_CALL.URL_ISSUES, dispatch);
};

export const addIssue = async (
  dispatch: (action: IActionIssueProps) => void,
  data: { title: string; body: string },
) => {
  const getData = {
    title: data.title,
    body: data.body,
  };
  postIssue(`${process.env.VITE_BASE_URL}/${API.PATHS.ISSUES}`, getData, dispatch);
};

//TODO : GET AN ISSUE
// export const getAIssue = async (dispatch: (action: IActionIssueProps) => void) => {
//   getIssue;
// };
