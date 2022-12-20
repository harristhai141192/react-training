import { ISSUE_ACTIONS } from '@constants/actions';
import { IssueModel } from '@models/index';
import {
  RequestIssueAction,
  SuccessRequestIssueAction,
  FailedRequestIssueAction,
  RequestAddIssueAction,
  SuccessAddIssueAction,
  FailedAddIssueAction,
  RequestUpdateIssueAction,
  SuccessUpdateIssueAction,
  FailedUpdateIssueAction,
  RequestDeleteIssueAction,
  SuccessDeleteIssueAction,
  FailedDeleteIssueAction,
  RequestSearchIssueAction,
  SuccessSearchIssueAction,
  FailedSearchIssueAction,
} from './actionTypes';

export interface IIssueStateProps {
  issue: IssueModel[];
  loading: boolean;
  error: string;
}

export const issueState: IIssueStateProps = {
  issue: [],
  loading: false,
  error: '',
};

export type IActionIssueProps =
  | RequestIssueAction
  | SuccessRequestIssueAction
  | FailedRequestIssueAction
  | RequestAddIssueAction
  | SuccessAddIssueAction
  | FailedAddIssueAction
  | RequestUpdateIssueAction
  | SuccessUpdateIssueAction
  | FailedUpdateIssueAction
  | RequestDeleteIssueAction
  | SuccessDeleteIssueAction
  | FailedDeleteIssueAction
  | RequestSearchIssueAction
  | SuccessSearchIssueAction
  | FailedSearchIssueAction;

const issueReducer = (state: IIssueStateProps = issueState, actions: IActionIssueProps) => {
  switch (actions.type) {
    case ISSUE_ACTIONS.GET_ISSUE:
      return {
        ...state,
        loading: true,
      };
    case ISSUE_ACTIONS.GET_ISSUE_SUCCESS:
      return {
        ...state,
        issue: actions.data.issue,
        loading: false,
      };
    case ISSUE_ACTIONS.GET_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ISSUE_ACTIONS.ADD_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ISSUE_ACTIONS.ADD_ISSUE_SUCCESS:
      return {
        ...state,
        issue: [...state.issue, actions.data.issue],
      };
    case ISSUE_ACTIONS.ADD_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // TODO : THIS IS NOT UPDATED YET, SHOULD BE FIXED
    case ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS:
      return {
        ...state,
        issue: state.issue,
        loading: false,
      };
    case ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ISSUE_ACTIONS.DELETE_ISSUE_REQUEST:
      // TODO : THIS IS NOT DELETED YET, SHOULD BE FIXED
      return {
        ...state,
        loading: true,
      };
    case ISSUE_ACTIONS.DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ISSUE_ACTIONS.DELETE_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
  }
};

export default issueReducer;
