import { configureStore } from '@reduxjs/toolkit';
import { contactReduce, filterReduce } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactReduce,
    filterContact: filterReduce,
  },
});
