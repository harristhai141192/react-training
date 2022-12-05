// Constants
import { API } from '@constants/apis';
import { HTTP_METHODS } from '@constants/httpMethods';

// Models
import { Member } from '@models/index';

//store
import { ACTIONS } from '@store/actions';
import { IActionProps } from '@store/reducer';
import { getAllMemberHelper, getMemberHelper } from '@helpers/memberHelpers';

/**
 * Get all the item in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getMembers = async (url: string, dispatch: (action: IActionProps) => void) => {
  dispatch({
    type: ACTIONS.MEMBER_REQUEST,
  });
  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return getAllMemberHelper(response, ACTIONS.MEMBER_REQUEST_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ACTIONS.MEMBER_REQUEST_FAILURE, data: { error: (e as Error).message } });
  }
};

/**
 * Adding a new item to DB
 * @param url - Init an URL of item
 * @param data - Init data for new item
 * @returns
 */
export const postMember = async (
  url: string,
  data: Member,
  dispatch: (action: IActionProps) => void,
) => {
  dispatch({
    type: ACTIONS.ADD_MEMBER_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.POST,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });
    if (response.status == 201) {
      return getMemberHelper(response, ACTIONS.ADD_MEMBER_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ACTIONS.ADD_MEMBER_FAILURE, data: { error: (e as Error).message } });
  }
};

/**
 * Update a Pokemon in DB
 * @param url - Init an URL of Pokemon
 * @param id - Find an item that is in-charged
 * @param data - Init a new data for the update
 * @returns
 */
export const updateMember = async (
  url: string,
  data: Member,
  dispatch: (action: IActionProps) => void,
) => {
  dispatch({
    type: ACTIONS.UPDATE_MEMBER_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.PUT,
      headers: API.HEADERS,
      body: JSON.stringify(data),
    });
    if (response.status == 200) {
      return getMemberHelper(response, ACTIONS.UPDATE_MEMBER_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ACTIONS.UPDATE_MEMBER_FAILURE, data: { error: (e as Error).message } });
  }
};

/**
 * Remove an item in DB
 * @param url - Init an URL of item
 * @param id - Find an itemID that is in-charged for delete
 * @returns
 */
export const removeMember = async (
  url: string,
  dispatch: (action: IActionProps) => void,
): Promise<void> => {
  dispatch({
    type: ACTIONS.DELETE_MEMBER_REQUEST,
  });
  try {
    const response = await fetch(url, {
      method: HTTP_METHODS.DELETE,
      headers: API.HEADERS,
    });
    if (response.status == 200) {
      return getMemberHelper(response, ACTIONS.DELETE_MEMBER_SUCCESS, dispatch);
    }
  } catch (e) {
    dispatch({ type: ACTIONS.DELETE_MEMBER_FAILURE, data: { error: (e as Error).message } });
  }
};
