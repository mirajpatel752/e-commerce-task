import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTagId: [],
};

const tagsViewSlice = createSlice({
  name: 'tagsView',
  initialState,
  reducers: {
    setActiveTag(state, action) {
      state.activeTagId = action.payload;
    },
  },
});

export const { setActiveTag} = tagsViewSlice.actions;

export default tagsViewSlice.reducer;
