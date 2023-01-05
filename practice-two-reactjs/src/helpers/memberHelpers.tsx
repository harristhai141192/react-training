// Store
import { ACTIONS } from '@store/actions';
import { IActionProps } from '@store/reducer';

export const getAllMemberHelper = async (
  response: Response,
  dispatchActions: ACTIONS,
  dispatch: (action: IActionProps) => void,
) => {
  const members = await response.json();

  dispatch({ type: dispatchActions, data: { members } });
};

export const getMemberHelper = async (
  response: Response,
  dispatchActions: ACTIONS,
  dispatch: (action: IActionProps) => void,
) => {
  const member = await response.json();

  dispatch({ type: dispatchActions, data: { member } });
};
