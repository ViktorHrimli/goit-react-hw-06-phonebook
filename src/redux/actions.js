import { nanoid } from 'nanoid';

export const addContact = (name, number) => {
  return {
    type: 'contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = taskId => {
  return {
    type: 'contact/removeContact',
    payload: taskId,
  };
};

export const filterContact = query => {
  return {
    type: 'filter/filterContact',
    payload: query,
  };
};
