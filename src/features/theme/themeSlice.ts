import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ThemeType } from "../../types/theme";

interface ThemeState {
  currentTheme: ThemeType;
}

const initialState: ThemeState = {
  currentTheme: "default",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeType>) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
