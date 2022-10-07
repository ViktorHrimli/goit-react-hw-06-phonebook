import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialContact = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContact,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    removeContact(state, action) {
      return state.reduce((acc, item) => {
        if (item.id !== action.payload) {
          acc.push(item);
        }
        return acc;
      }, []);
    },
  },
});
export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
