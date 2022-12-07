import { useContext, createContext, useReducer, ReactNode } from 'react';
import reducer, { initialState, IInitialStateProps, IActionProps } from './reducer';
import { ACTIONS } from './actions';
import { Member } from '@models/index';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const MemberContext: any = createContext(initialState);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch]: [IInitialStateProps, (actionProps: IActionProps) => void] = useReducer(
    reducer,
    initialState,
  );

  const addMemberRequest = (): void => {
    dispatch({
      type: ACTIONS.ADD_MEMBER_REQUEST,
    });
  };

  const addMemberSuccess = async (response: Response): Promise<void> => {
    const members = await response.json();
    dispatch({
      type: ACTIONS.MEMBER_REQUEST_SUCCESS,
      data: { members },
    });
  };

  const addMemberFailure = (error: Error): void => {
    dispatch({
      type: ACTIONS.MEMBER_REQUEST_FAILURE,
      data: { error: error.message },
    });
  };

  const value = {
    members: state.members,
    loading: state.loading,
    error: state.error,
    addMemberRequest,
    addMemberSuccess,
    addMemberFailure,
  };

  return <MemberContext.Provider value={value}>{children}</MemberContext.Provider>;
};

interface IUseMember {
  members: Member[];
  loading: boolean;
  error: string;
  addMemberRequest(): () => void;
  addMemberSuccess(response: Response): Promise<void>;
  addMemberFailure(error: Error): () => void;
}

const useMember = (): IUseMember => {
  const context = useContext(MemberContext);

  if (context === undefined) {
    throw new Error('useMember must be used within MemberContext');
  }

  return context as IUseMember;
};

export default useMember;
