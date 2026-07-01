import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

interface CurrentState {
  meme: MemeInterface;
}

const initialState: CurrentState = {
  meme: emptyMeme,
};

const currentSlice = createSlice({
  name: "current",
  initialState,
  reducers: {
    clear: (state) => {
      state.meme = emptyMeme;
    },

    update: (state, action: PayloadAction<MemeInterface>) => {
      state.meme = action.payload;
    },
  },
});

export const { clear, update } = currentSlice.actions;

export default currentSlice.reducer;