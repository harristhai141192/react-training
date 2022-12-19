import { ISSUE_ACTIONS } from '@constants/actions';

import { IssueModel } from '@models/index';

export interface RequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUE;
}

export interface SuccessRequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUE_SUCCESS;
  data: { issue: IssueModel[] };
}

export interface FailedRequestIssueAction {
  type: ISSUE_ACTIONS.GET_ISSUE_FAILURE;
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
  data: { issue: IssueModel };
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
