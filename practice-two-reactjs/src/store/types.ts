import { ACTIONS } from './actions';

// Models
import { Member } from '@models/index';

// MEMBER TYPES
export interface RequestMembersAction {
  type: ACTIONS.MEMBER_REQUEST;
}

export interface SuccessRequestMembersAction {
  type: ACTIONS.MEMBER_REQUEST_SUCCESS;
  data: { members: Member[] };
}

export interface FailedRequestMembersAction {
  type: ACTIONS.MEMBER_REQUEST_FAILURE;
  data: { error: string };
}

// ADD TYPES
export interface RequestAddMemberAction {
  type: ACTIONS.ADD_MEMBER_REQUEST;
}

export interface SuccessAddMemberAction {
  type: ACTIONS.ADD_MEMBER_SUCCESS;
  data: { member: Member };
}

export interface FailedAddMemberAction {
  type: ACTIONS.ADD_MEMBER_FAILURE;
  data: { error: string };
}

// UPDATE TYPES
export interface RequestUpdateMemberAction {
  type: ACTIONS.UPDATE_MEMBER_REQUEST;
}

export interface SuccessUpdateMemberAction {
  type: ACTIONS.UPDATE_MEMBER_SUCCESS;
  data: { member: Member };
}

export interface FailedUpdateMemberAction {
  type: ACTIONS.UPDATE_MEMBER_FAILURE;
  data: { error: string };
}

// DELETE TYPES
export interface RequestDeleteMemberAction {
  type: ACTIONS.DELETE_MEMBER_REQUEST;
}

export interface SuccessDeleteMemberAction {
  type: ACTIONS.DELETE_MEMBER_SUCCESS;
  data: { member: Member };
}

export interface FailedDeleteMemberAction {
  type: ACTIONS.DELETE_MEMBER_FAILURE;
  data: { error: string };
}

// SEARCH TYPES
export interface RequestSearchMemberAction {
  type: ACTIONS.SEARCH_MEMBER_REQUEST;
}

export interface SuccessSearchMemberAction {
  type: ACTIONS.SEARCH_MEMBER_SUCCESS;
  data: { members: Member[] };
}

export interface FailedSearchMemberAction {
  type: ACTIONS.SEARCH_MEMBER_FAILURE;
  data: { error: string };
}
