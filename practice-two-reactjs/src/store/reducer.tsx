import { Member } from '@models/index';
import { ACTIONS } from './action';

export interface IInitialStateProps {
  members: Member[];
  loading: boolean;
  error: string;
}

export const initialState: IInitialStateProps = {
  members: [],
  loading: false,
  error: '',
};

const reducer = (
  state = initialState,
  actions: { type: string; data: { members?: Member[]; error: string } },
) => {
  switch (actions.type) {
    // request get all
    case ACTIONS.API_CALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.API_CALL_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };
    case ACTIONS.API_CALL_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request add
    case ACTIONS.API_ADD_REQUEST:
      console.log('DISPATCH REQUEST');
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.API_ADD_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };
    case ACTIONS.API_ADD_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request update
    case ACTIONS.API_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.API_UPDATE_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };
    case ACTIONS.API_UPDATE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request delete
    case ACTIONS.API_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.API_DELETE_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };
    case ACTIONS.API_DELETE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
