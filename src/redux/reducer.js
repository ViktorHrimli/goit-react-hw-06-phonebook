import { combineReducers } from 'redux';

const initialContact = { contact: [], filter: '' };

const contactReduce = (state = initialContact, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return { ...state, contact: [...state.contact, action.payload] };
    case 'contact/removeContact':
      return {
        ...state,
        contact: state.contact.filter(item => item.id !== action.payload),
      };
    case 'filter/filterContact':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactReduce,
});
