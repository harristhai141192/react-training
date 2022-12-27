// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// ActionTypes
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
  RequestAnIssueAction,
  SuccessRequestAnIssueAction,
  FailedRequestAnIssueAction,
  RequestLockIssueAction,
  SuccessLockIssueAction,
  FailedLockIssueAction,
  RequestUnlockIssueAction,
  SuccessUnlockIssueAction,
  FailedUnlockIssueAction,
} from './actionTypes';
import { IssueModel } from '@models/index';

export interface IIssueStateProps {
  byId: IssueModel;
  order: number[];
  loading: boolean;
  error: string;
}

const defaultIssue = {
  number: '',
  title: '',
  user: {
    login: '',
    create_at: '',
  },
  locked: false,
};

export const issueState: IIssueStateProps = {
  byId: defaultIssue,
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
  | FailedRequestAnIssueAction
  | RequestLockIssueAction
  | SuccessLockIssueAction
  | FailedLockIssueAction
  | RequestUnlockIssueAction
  | SuccessUnlockIssueAction
  | FailedUnlockIssueAction;

const issueReducer = (state: IIssueStateProps = issueState, actions: IActionIssueProps) => {
  switch (actions.type) {
    case ISSUE_ACTIONS.LOCK_ISSUE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS: {
      return {
        ...state,
        byId: actions.data.issue,
        loading: false,
      };
    }

    case ISSUE_ACTIONS.LOCK_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data.error,
        loading: false,
      };
    }

    case ISSUE_ACTIONS.UNLOCK_ISSUE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ISSUE_ACTIONS.UNLOCK_ISSUE_SUCCESS: {
      return {
        ...state,
        byId: actions.data.issue,
        loading: false,
      };
    }

    case ISSUE_ACTIONS.UNLOCK_ISSUE_FAILURE: {
      return {
        ...state,
        loading: false,
      };
    }
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

    case ISSUE_ACTIONS.UPDATE_ISSUE_SUCCESS: {
      const currentById = actions.data.issue;

      return {
        ...state,
        byId: currentById,
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
