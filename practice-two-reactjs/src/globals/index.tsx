import { createContext, useReducer } from 'react';

export const ContextState = createContext([]);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_MEMBER':
      return {
        ...state,
        member: action.addMember,
      };
    case 'DELETE_MEMBER':
      return state.filter((member) => member.id !== action.data.id);
    case 'EDIT_MEMBER':
      return [...state.map((member) => (member.id === action.data.id ? action.data : member))];
    case 'GET_MEMBERS':
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
