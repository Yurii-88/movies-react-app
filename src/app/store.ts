import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from '../features/filtersSidebar/filtersSidebarSlice';

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
