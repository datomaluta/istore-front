import { createSlice } from "@reduxjs/toolkit";

interface themeType {
  theme: string;
}

const initialState: themeType = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    saveTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

export const { saveTheme } = themeSlice.actions;

export default themeSlice.reducer;
