import { API } from '@constants/apis';
import { getIssues } from '@services/issueServices';
import { IActionIssueProps } from '../stores/Issue/issueReducer';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

export const getAllIssue = async (dispatch: (action: IActionIssueProps) => void) => {
  getIssues(API.PATHS.URL_ISSUES, dispatch);
};
