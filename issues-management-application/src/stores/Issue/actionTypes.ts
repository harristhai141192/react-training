// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Models
import { IssueModel, ILockReason } from '@models/index';

export interface RequestAnIssueAction {
  type: ISSUE_ACTIONS.GET_AN_ISSUE;
}
export interface SuccessRequestAnIssueAction {
  type: ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}
export interface FailedRequestAnIssueAction {
  type: ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE;
  data: { error: string };
}

export interface RequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUES;
}

export interface SuccessRequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUES_SUCCESS;
  data: { issue: IssueModel[] };
}

export interface FailedRequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUES_FAILURE;
  data: { error: string };
}

// ADD TYPES
export interface RequestAddIssueAction {
  type: ISSUE_ACTIONS.ADD_ISSUE_REQUEST;
}

export interface SuccessAddIssueAction {
  type: ISSUE_ACTIONS.ADD_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}

export interface FailedAddIssueAction {
  type: ISSUE_ACTIONS.ADD_ISSUE_FAILURE;
  data: { error: string };
}

// UPDATE TYPES
export interface RequestUpdateIssueAction {
  type: ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST;
}

export interface SuccessUpdateIssueAction {
  type: ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS;
  data: { currentId: string; title: string };
}

export interface FailedUpdateIssueAction {
  type: ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE;
  data: { error: string };
}

// DELETE TYPES
export interface RequestDeleteIssueAction {
  type: ISSUE_ACTIONS.DELETE_ISSUE_REQUEST;
}

export interface SuccessDeleteIssueAction {
  type: ISSUE_ACTIONS.DELETE_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}

export interface FailedDeleteIssueAction {
  type: ISSUE_ACTIONS.DELETE_ISSUE_FAILURE;
  data: { error: string };
}

// SEARCH TYPES
export interface RequestSearchIssueAction {
  type: ISSUE_ACTIONS.SEARCH_ISSUE_REQUEST;
}

export interface SuccessSearchIssueAction {
  type: ISSUE_ACTIONS.SEARCH_ISSUE_SUCCESS;
  data: { issue: IssueModel[] };
}

export interface FailedSearchIssueAction {
  type: ISSUE_ACTIONS.SEARCH_ISSUE_FAILURE;
  data: { error: string };
}

export interface RequestLockIssueAction {
  type: ISSUE_ACTIONS.LOCK_ISSUE_REQUEST;
}

export interface SuccessLockIssueAction {
  type: ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS;
  data: { currentId: string } & ILockReason;
}

export interface FailedLockIssueAction {
  type: ISSUE_ACTIONS.LOCK_ISSUE_FAILURE;
  data: { error: string };
}

export interface RequestUnlockIssueAction {
  type: ISSUE_ACTIONS.UNLOCK_ISSUE_REQUEST;
}

export interface SuccessUnlockIssueAction {
  type: ISSUE_ACTIONS.UNLOCK_ISSUE_SUCCESS;
  data: { currentId: string; locked: boolean };
}

export interface FailedUnlockIssueAction {
  type: ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE;
  data: { error: string };
}
