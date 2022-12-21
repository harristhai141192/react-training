// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Models
import { IActionIssueProps } from '../stores/Issue/issueReducer';
import { getAllIssueHelper, getIssueHelper } from '../helpers/issueHelper';
import { IssueModel } from '@models/index';
import { HTTP_METHODS } from '@constants/httpMethods';

/**
 * Get all the item in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getIssues = async (url: string, dispatch: (action: IActionIssueProps) => void) => {
  dispatch({
    type: ISSUE_ACTIONS.GET_ISSUE,
  });
  try {
    const response = await fetch(url);
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
    const response = await fetch(url);
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
      console.log('SERVICE RESPONSE', response);

      return getIssueHelper(response, ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE, data: { error: (e as Error).message } });
  }
};

export const deleteIssueService = async (
  url: string,
  dispatch: (action: IActionIssueProps) => void,
) => {};
