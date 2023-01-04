// Constants
import { ISSUE_ACTIONS } from '@constants/actions';

// Models
import { IssueModel } from '@models/index';

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

interface IById {
  [key: string]: IssueModel;
}

export interface IssueState {
  byId: IById;
  order: number[];
  loading: boolean;
  error: string;
}

export type IssueAction =
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

export const initialIssueState: IssueState = {
  byId: {},
  order: [],
  loading: false,
  error: '',
};

const issueReducer = (state: IssueState = initialIssueState, actions: IssueAction): IssueState => {
  switch (actions.type) {
    case ISSUE_ACTIONS.LOCK_ISSUE_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }

    case ISSUE_ACTIONS.LOCK_ISSUE_SUCCESS: {
      const currentById = {
        ...state.byId,
        [actions.data.currentId]: {
          ...state.byId[actions.data.currentId],
          active_lock_reason: actions.data.lockReason,
          locked: true,
        },
      };

      return {
        ...state,
        byId: currentById,
        loading: false,
      };
    }

    case ISSUE_ACTIONS.LOCK_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data?.error,
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
      const currentById = {
        ...state.byId,
        [actions.data?.currentId]: {
          ...state.byId[actions.data.currentId],
          locked: actions.data.locked,
        },
      };

      return {
        ...state,
        byId: currentById,
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
      const currentById = {
        ...state.byId,
        [actions.data?.issue.number]: actions.data.issue,
      };

      const currentOrder = [...state.order, actions.data.issue.number].filter(
        (element, index) => [...state.order, actions.data.issue.number].indexOf(element) === index,
      );

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_AN_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions.data?.error,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_ISSUES: {
      return {
        ...state,
        loading: true,
      };
    }

    case ISSUE_ACTIONS.GET_ISSUES_SUCCESS: {
      const currentById = actions?.data?.issue?.reduce(
        (newById: object, item: IssueModel) => ({
          ...newById,
          [item.number]: item,
        }),
        {},
      );

      const currentOrder = actions.data?.issue?.map((item: IssueModel) => item.number);

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
        loading: false,
      };
    }
    case ISSUE_ACTIONS.GET_ISSUES_FAILURE: {
      return {
        ...state,
        error: actions.data?.error,
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
        [actions.data.issue?.number]: actions.data?.issue,
      };

      const currentOrder = [...state.order, actions?.data?.issue?.number];

      return {
        ...state,
        byId: currentById,
        order: currentOrder,
      };
    }

    case ISSUE_ACTIONS.ADD_ISSUE_FAILURE: {
      return {
        ...state,
        error: actions?.data?.error,
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
      const currentById = {
        ...state.byId,
        [actions.data?.currentId]: {
          ...state.byId[actions.data.currentId],
          title: actions.data.title,
        },
      };

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
        error: actions?.data?.error,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default issueReducer;
