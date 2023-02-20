import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeTagId: [],
  tags: [],
};

const tagsViewSlice = createSlice({
  name: 'tagsView',
  initialState,
  reducers: {
    setActiveTag(state, action) {
      console.log( action,"state, action")
      state.tags = action.payload;
    },
  },
});

export const { setActiveTag } = tagsViewSlice.actions;

export default tagsViewSlice.reducer;
