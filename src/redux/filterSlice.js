import { createSlice } from '@reduxjs/toolkit';
const intitialFilter = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: intitialFilter,
  reducers: {
    filterContact: {
      reducer(state, action) {
        return (state.filter = action.payload);
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// const intitialFilter = { filter: '' };
// export const filterReduce = createReducer(intitialFilter, {
//   [filterContact]: (state, action) => {
//     return { ...state, filter: action.payload };
//   },
// });

// import { createSlice } from '@reduxjs/toolkit';
// import { statusFilters } from './constants';
// const filtersInitialState = {
//   status: statusFilters.all,
// };
// const filtersSlice = createSlice({
//   name: 'filters',
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });
// // Экспортируем генераторы экшенов и редюсер
// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;
