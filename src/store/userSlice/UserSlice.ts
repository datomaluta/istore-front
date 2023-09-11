import { createSlice } from "@reduxjs/toolkit";

interface authorizedUserType {
  authorizedUser: any;
}

const initialState: authorizedUserType = {
  authorizedUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveAuthorizedUser: (state, action) => {
      state.authorizedUser = action.payload;
    },
  },
});

export const { saveAuthorizedUser } = userSlice.actions;

export default userSlice.reducer;
