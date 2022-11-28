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
  actions: { type: string; data: { members?: Member[]; member: Member; error: string } },
) => {
  switch (actions.type) {
    // request get all
    case ACTIONS.MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.MEMBER_REQUEST_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };
    case ACTIONS.MEMBER_REQUEST_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request add
    case ACTIONS.ADD_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.ADD_MEMBER_SUCCESS:
      return {
        ...state,
        members: [...state.members, actions.data.member],
        loading: false,
      };
    case ACTIONS.ADD_MEMBER_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request update
    case ACTIONS.UPDATE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.UPDATE_MEMBER_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const updateMemberArray = state.members;
      // eslint-disable-next-line no-case-declarations
      const findObj = state.members.findIndex((obj) => obj.id == actions.data.member.id);
      updateMemberArray[findObj] = actions.data.member;
      return {
        ...state,
        members: updateMemberArray,
        loading: false,
      };
    case ACTIONS.UPDATE_MEMBER_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    // request delete
    case ACTIONS.DELETE_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.DELETE_MEMBER_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const filterDataDeleted = state.members.filter((e: Member) => {
        return e.id !== actions.data.member.id;
      });
      return {
        ...state,
        members: filterDataDeleted,
        loading: false,
      };
    case ACTIONS.DELETE_MEMBER_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ACTIONS.SEARCH_MEMBER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.SEARCH_MEMBER_SUCCESS:
      return {
        ...state,
        members: actions.data.members,
        loading: false,
      };

    case ACTIONS.SEARCH_MEMBER_FAILURE:
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
