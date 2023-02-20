import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tags: [],
};

const tagsViewSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setCard(state, action) {
      state.tags = action.payload;
    },
  },
});

export const { setCard } = tagsViewSlice.actions;

export default tagsViewSlice.reducer;
