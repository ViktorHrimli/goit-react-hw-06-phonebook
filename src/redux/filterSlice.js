import { createSlice } from '@reduxjs/toolkit';
const intitialFilter = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: intitialFilter,
  reducers: {
    filterContact: {
      reducer(state, action) {
        return (state = action.payload);
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
