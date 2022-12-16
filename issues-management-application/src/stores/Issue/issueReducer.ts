import { ACTIONS } from '@constants/actions';
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
  console.log('actions', actions);
  console.log('actions', actions.type);

  switch (actions.type) {
    case ACTIONS.ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.ISSUE_REQUEST_SUCCESS:
      console.log('issue', state.issue);

      return {
        ...state,
        issue: actions.data.issue,
        loading: false,
      };
    case ACTIONS.ISSUE_REQUEST_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ACTIONS.ADD_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.ADD_ISSUE_SUCCESS:
      return {
        ...state,
        issue: [...state.issue, actions.data.issue],
      };
    case ACTIONS.ADD_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ACTIONS.UPDATE_ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    // TODO : THIS IS NOT UPDATED YET, SHOULD BE FIXED
    case ACTIONS.UPDATE_ISSUE_SUCCESS:
      return {
        ...state,
        issue: state.issue,
        loading: false,
      };
    case ACTIONS.UPDATE_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };

    case ACTIONS.DELETE_ISSUE_REQUEST:
      // TODO : THIS IS NOT DELETED YET, SHOULD BE FIXED
      return {
        ...state,
        loading: true,
      };
    case ACTIONS.DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ACTIONS.DELETE_ISSUE_FAILURE:
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
  }
};

export default issueReducer;
