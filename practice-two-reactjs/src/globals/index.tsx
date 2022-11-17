import { createContext, useReducer } from 'react';

export const ContextState = createContext([]);

const reducer = (state, action) => {
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
export const ContextProvider = ({ children }) => {
  const [memberContext, dispatch] = useReducer(reducer, []);
  return (
    <ContextState.Provider value={[memberContext, dispatch]}>{children}</ContextState.Provider>
  );
};
