import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialContact = { contact: [] };

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialContact,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contact.push(action.payload);
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
      return state.contact.filter(item => item.id !== action.payload);
    },
  },
});
export const { addContact, removeContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
