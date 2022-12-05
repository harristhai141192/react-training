import { ACTIONS } from './actions';
import {
  RequestMembersAction,
  SuccessRequestMembersAction,
  FailedRequestMembersAction,
  RequestAddMemberAction,
  SuccessAddMemberAction,
  FailedAddMemberAction,
  RequestUpdateMemberAction,
  SuccessUpdateMemberAction,
  FailedUpdateMemberAction,
  RequestDeleteMemberAction,
  SuccessDeleteMemberAction,
  FailedDeleteMemberAction,
  RequestSearchMemberAction,
  SuccessSearchMemberAction,
  FailedSearchMemberAction,
} from './types';

// Models
import { Member } from '@models/index';
export interface IInitialStateProps {
  members: Member[];
  loading: boolean;
  error: string;
}

export type IActionProps =
  | RequestMembersAction
  | SuccessRequestMembersAction
  | FailedRequestMembersAction
  | RequestAddMemberAction
  | SuccessAddMemberAction
  | FailedAddMemberAction
  | RequestUpdateMemberAction
  | SuccessUpdateMemberAction
  | FailedUpdateMemberAction
  | RequestDeleteMemberAction
  | SuccessDeleteMemberAction
  | FailedDeleteMemberAction
  | RequestSearchMemberAction
  | SuccessSearchMemberAction
  | FailedSearchMemberAction;

export const initialState: IInitialStateProps = {
  members: [],
  loading: false,
  error: '',
};

const reducer = (state: IInitialStateProps = initialState, actions: IActionProps) => {
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

    // request search
    case ACTIONS.SEARCH_MEMBER_REQUEST:
      return {
        ...state,
        loading: false,
      };
    // return la het r
    // true la` quay, ra false ma no van doi quay
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
