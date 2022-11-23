import { Member } from '@models/index';

const memberReducer = (state: Member, action: { type: string; payload: Member[] }) => {
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
      console.log('state', state);

      console.log('action.payload: ', action);

      return {
        ...state,
        member: action.payload,
      };
    default:
      break;
  }
};

export default memberReducer;
