import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  card: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCard(state, action) {
      state.card = action.payload;
    },
  },
});

export const { setCard } = cardSlice.actions;

export default cardSlice.reducer;
