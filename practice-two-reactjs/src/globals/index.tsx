import { IMemberDetail } from '@models/index';
import { createContext, useReducer, ReactNode } from 'react';

export const ContextState = createContext([]);

const reducer = (state: IMemberDetail, action: { type: string; payload: IMemberDetail[] }) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return {
        ...state,
        member: action.payload,
      };
    case 'DELETE_MEMBER':
      return {
        ...state,
        member: action.payload,
      };
    case 'EDIT_MEMBER':
      return {
        ...state,
        member: action.payload,
      };
    default:
      break;
  }
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [memberContext, dispatch] = useReducer(reducer, []);
  return (
    <ContextState.Provider value={[memberContext, dispatch]}>{children}</ContextState.Provider>
  );
};
