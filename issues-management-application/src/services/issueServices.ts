// Constants
import { ACTIONS } from '@constants/actions';
import { API } from '@constants/apis';

// Models
import { IssueModel } from '@models/index';
import { IActionIssueProps } from '../stores/Issue/issueReducer';
import { getAllIssueHelper } from '../helpers/issueHelper';

/**
 * Get all the item in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getIssues = async (url: string, dispatch: (action: IActionIssueProps) => void) => {
  dispatch({
    type: ACTIONS.ISSUE_REQUEST,
  });
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return getAllIssueHelper(response, ACTIONS.ISSUE_REQUEST_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ACTIONS.ISSUE_REQUEST_FAILURE, data: { error: (e as Error).message } });
  }
};

/**
 * Adding a new item to DB
 * @param url - Init an URL of item
 * @param data - Init data for new item
 * @returns
 */
export const post = async <IssueModel>(url: string, data: IssueModel): Promise<IssueModel[]> => {
  try {
    const response = await fetch(url, {
      method: API.HTTP_METHODS.POST,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Update a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find an item that is in-charged
 * @param data - Init a new data for the update
 * @returns
 */
export const update = async (url: string, data: IssueModel): Promise<IssueModel> => {
  try {
    const response = await fetch(url, {
      method: API.HTTP_METHODS.PUT,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });

    return await response.json();
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Remove an item in DB
 * @param url - Init an URL of item
 * @param id - Find an itemID that is in-charged for delete
 * @returns
 */
export const remove = async (url: string): Promise<void> => {
  try {
    const response = await fetch(url, {
      method: API.HTTP_METHODS.DELETE,
      headers: API.HEADERS,
    });

    return await response.json();
  } catch (e) {
    throw (e as Error).message;
  }
};
