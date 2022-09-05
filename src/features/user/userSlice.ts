import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface UserState {
  user: {
    email: string;
  };
  id: number;
  status: "idle" | "loading" | "failed";
}

const initialState: UserState = {
  user: {
    email: "",
  },
  id: 0,
  status: "idle",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchUser: (state, action) => {
      state.status = "loading";
      state.id = action.payload.id;
    },

    fetchUserSuccess: (state, action) => {
      state.status = "idle";
      state.user = {
        email: action.payload.email,
      };
    },

    fetchUserError: (state) => {
      state.status = "failed";
    },
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserError } =
  userSlice.actions;

export const user = (state: RootState) => state.user;

export default userSlice.reducer;
