import { ACTIONS } from '@constants/actions';

import { IssueModel } from '@models/index';

export interface RequestIssueAction {
  type: ACTIONS.ISSUE_REQUEST;
}

export interface SuccessRequestIssueAction {
  type: ACTIONS.ISSUE_REQUEST_SUCCESS;
  data: { issue: IssueModel[] };
}

export interface FailedRequestIssueAction {
  type: ACTIONS.ISSUE_REQUEST_FAILURE;
  data: { error: string };
}

// ADD TYPES
export interface RequestAddIssueAction {
  type: ACTIONS.ADD_ISSUE_REQUEST;
}

export interface SuccessAddIssueAction {
  type: ACTIONS.ADD_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}

export interface FailedAddIssueAction {
  type: ACTIONS.ADD_ISSUE_FAILURE;
  data: { error: string };
}

// UPDATE TYPES
export interface RequestUpdateIssueAction {
  type: ACTIONS.UPDATE_ISSUE_REQUEST;
}

export interface SuccessUpdateIssueAction {
  type: ACTIONS.UPDATE_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}

export interface FailedUpdateIssueAction {
  type: ACTIONS.UPDATE_ISSUE_FAILURE;
  data: { error: string };
}

// DELETE TYPES
export interface RequestDeleteIssueAction {
  type: ACTIONS.DELETE_ISSUE_REQUEST;
}

export interface SuccessDeleteIssueAction {
  type: ACTIONS.DELETE_ISSUE_SUCCESS;
  data: { issue: IssueModel };
}

export interface FailedDeleteIssueAction {
  type: ACTIONS.DELETE_ISSUE_FAILURE;
  data: { error: string };
}

// SEARCH TYPES
export interface RequestSearchIssueAction {
  type: ACTIONS.SEARCH_ISSUE_REQUEST;
}

export interface SuccessSearchIssueAction {
  type: ACTIONS.SEARCH_ISSUE_SUCCESS;
  data: { issue: IssueModel[] };
}

export interface FailedSearchIssueAction {
  type: ACTIONS.SEARCH_ISSUE_FAILURE;
  data: { error: string };
}
