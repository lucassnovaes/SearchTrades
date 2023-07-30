import { createSlice } from "@reduxjs/toolkit";
import User from "../entities/User";

const initialState = User.fromObject({});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
