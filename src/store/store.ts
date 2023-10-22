import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./userSlice/UserSlice";
import ThemeSlice from "./themeSlice/ThemeSlice";
import CartSlice from "./cartSlice/CartSlice";

export const store = configureStore({
  reducer: {
    user: UserSlice,
    theme: ThemeSlice,
    cart: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
