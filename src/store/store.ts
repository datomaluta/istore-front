import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice/UserSlice";
import ThemeSlice from "./themeSlice/ThemeSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    theme: ThemeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
