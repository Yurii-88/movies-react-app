import { createSlice } from '@reduxjs/toolkit';
import type { SearchFilter } from './FiltersSidebar.types';

const filtersSidebarSlice = createSlice({
  name: 'filters',
  initialState: {
    category: '',
    genre: '',
    language: '',
    rating: 0,
    releaseYear: '',
  },
  reducers: {
    resetFilters(state) {
      state.category = '';
      state.genre = '';
      state.language = '';
      state.rating = 0;
      state.releaseYear = '';
    },
    setFiltersValue(
      state,
      action: {
        payload: {
          filter: SearchFilter;
          value: string;
        };
      }
    ) {
      state[action.payload.filter] = action.payload.value;
    },
    setRating(state, action: { payload: number }) {
      state.rating = action.payload;
    },
  },
});

export const { resetFilters, setFiltersValue, setRating } = filtersSidebarSlice.actions;
export default filtersSidebarSlice.reducer;
