// Services
import { get, post, update, remove } from '@services/apiServices';

// Models
import { IMemberDetail } from '@models/index';
import { API } from '@constants/apis';

/**
 * Get all the member in DB
 * @param url - Init an URL of member
 * @returns member List
 */
export const getMembers = async (): Promise<IMemberDetail[]> => {
  try {
    const memberList: IMemberDetail[] = await get(`${API.PATHS.URL_MEMBER}`);
    console.log('abc');

    return memberList;
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Get a single member in DB
 * @param url - Init an URL of item
 * @returns item List
 */
export const getAMember = async (id: string): Promise<IMemberDetail> => {
  try {
    const member: IMemberDetail = await get(`${API.PATHS.URL_MEMBER}/${id}`);

    return member;
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Delete a new member to DB
 * @param id - Init member id for delete
 * @returns
 */
export const deleteMember = async (id: string): Promise<void> => {
  try {
    const url = `${API.PATHS.URL_MEMBER}/${id}`;

    return remove(url);
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Adding a new member to DB
 * @param data - Init data for new member
 * @returns
 */
export const addMember = async (data: IMemberDetail): Promise<IMemberDetail[]> => {
  try {
    const url = `${API.PATHS.URL_MEMBER}`;

    return post(url, data);
  } catch (e) {
    throw (e as Error).message;
  }
};

/**
 * Update a member in DB
 * @param url - Init an URL of member
 * @param id - Find a memberID that is in-charged
 * @param data - Init a new data for the updated member
 * @returns
 */
export const updateMember = async (id: string, data: IMemberDetail): Promise<IMemberDetail> => {
  try {
    const updateMember: IMemberDetail = await update(`${API.PATHS.URL_MEMBER}/${id}`, data);

    return updateMember;
  } catch (e) {
    throw (e as Error).message;
  }
};
