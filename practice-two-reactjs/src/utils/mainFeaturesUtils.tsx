// Apis
import { API } from '@constants/apis';

// Services
import { getMembers, postMember, removeMember, updateMember } from '@services/memberServices';

//Store
import { ACTIONS } from '@store/actions';
import { IActionProps } from '@store/reducer';

// GENERATE KEY
export const generateKey = () => `${Math.random()}_${new Date().getTime()}_${Math.random()}`;

export const getAllMember = async (dispatch: (action: IActionProps) => void) => {
  getMembers(API.PATHS.URL_MEMBER, dispatch);
};

export const addMember = async (
  dispatch: (action: IActionProps) => void,
  formItems: HTMLFormElement,
) => {
  const [memberName, dateOfBirth, memberImg, phone, memberSince, email, gender, job, description] =
    formItems;

  const getMemberValue = {
    id: generateKey(),
    memberName: (memberName as HTMLInputElement).value,
    dateOfBirth: (dateOfBirth as HTMLInputElement).value,
    memberImg: (memberImg as HTMLInputElement).value,
    phone: (phone as HTMLInputElement).value,
    memberSince: (memberSince as HTMLInputElement).value,
    email: (email as HTMLInputElement).value,
    gender: (gender as HTMLInputElement).value,
    job: (job as HTMLInputElement).value,
    description: (description as HTMLInputElement).value,
  };
  postMember(API.PATHS.URL_MEMBER, getMemberValue, dispatch);
};

export const updateSpecificMember = async (
  dispatch: (action: IActionProps) => void,
  currentId: string,
  formItems: HTMLFormElement,
) => {
  const [memberName, dateOfBirth, memberImg, phone, memberSince, email, gender, job, description] =
    formItems;
  const getMemberValue = {
    id: currentId,
    memberName: (memberName as HTMLInputElement).value,
    dateOfBirth: (dateOfBirth as HTMLInputElement).value,
    memberImg: (memberImg as HTMLInputElement).value,
    phone: (phone as HTMLInputElement).value,
    memberSince: (memberSince as HTMLInputElement).value,
    email: (email as HTMLInputElement).value,
    gender: (gender as HTMLInputElement).value,
    job: (job as HTMLInputElement).value,
    description: (description as HTMLInputElement).value,
  };
  updateMember(`${API.PATHS.URL_MEMBER}/${currentId}`, getMemberValue, dispatch);
};

export const deleteMember = async (dispatch: (action: IActionProps) => void, currentId: string) => {
  removeMember(`${API.PATHS.URL_MEMBER}/${currentId}`, dispatch);
};

export const searchMember = async (dispatch: (action: IActionProps) => void, inputText: string) => {
  const response = await fetch(`${API.PATHS.URL_MEMBER}?memberName=${inputText}`);

  if (response.status == 200) {
    const members = await response.json();
    dispatch({ type: ACTIONS.SEARCH_MEMBER_SUCCESS, data: { members } });
    return;
  }
  dispatch({ type: ACTIONS.SEARCH_MEMBER_FAILURE, data: { error: 'Failed to search member' } });
};
