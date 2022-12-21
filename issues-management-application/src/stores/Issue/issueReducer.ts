import { ISSUE_ACTIONS } from '@constants/actions';
// import { IssueModel } from '@models/index';
import {
  RequestAnIssueAction,
  SuccessRequestAnIssueAction,
  FailedRequestAnIssueAction,
} from './actionTypes';
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
  byId: object;
  order: number[];
  loading: boolean;
  error: string;
}

export const issueState: IIssueStateProps = {
  byId: {},
  order: [],
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
  | FailedSearchIssueAction
  | RequestAnIssueAction
  | SuccessRequestAnIssueAction
  | FailedRequestAnIssueAction;

const issueReducer = (state: IIssueStateProps = issueState, actions: IActionIssueProps) => {
  switch (actions.type) {
    case ISSUE_ACTIONS.GET_AN_ISSUE: {
      return {
        ...state,
        loading: true,
      };
    }
    case ISSUE_ACTIONS.GET_AN_ISSUE_SUCCESS: {
      return {
        ...state,
        byId: actions.data.issue,
        order: actions.data.issue.number,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_ISSUE: {
      return {
        ...state,
        loading: true,
      };
    }

    case ISSUE_ACTIONS.GET_ISSUE_SUCCESS: {
      const currentById = actions.data.issue.reduce(
        (newById, item) => ({
          ...newById,
          [item.number]: item,
        }),
        {},
      );

      const currentOrder = actions.data.issue.map((item) => item.number);

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.ADD_ISSUE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case ISSUE_ACTIONS.ADD_ISSUE_SUCCESS: {
      const currentById = {
        ...state.byId,
        [actions.data.issue.number]: actions.data.issue,
      };
      const currentOrder = [...state.order, actions.data.issue.number];

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
      };
    }

    case ISSUE_ACTIONS.ADD_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.UPDATE_ISSUE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    // TODO : THIS IS NOT UPDATED YET, SHOULD BE FIXED
    case ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS: {
      const currentById = {
        ...state.byId,
        [actions.data.issue.number]: actions.data.issue,
      };
      console.log('CURRENTBYID', currentById);
      console.log('SUCCESS UPDATED');

      return {
        ...state,
        byId: currentById,
        order: [...state.order],
        loading: false,
      };
    }
    case ISSUE_ACTIONS.UPDATE_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.DELETE_ISSUE_REQUEST: {
      // TODO : THIS IS NOT DELETED YET, SHOULD BE FIXED
      return {
        ...state,
        loading: true,
      };
    }
    case ISSUE_ACTIONS.DELETE_ISSUE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.DELETE_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }
  }
};

export default issueReducer;
