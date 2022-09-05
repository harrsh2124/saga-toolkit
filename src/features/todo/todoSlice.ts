import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface TodoState {
  todo: {
    title: string;
  };
  id: number;
  status: "idle" | "loading" | "failed";
}

const initialState: TodoState = {
  todo: {
    title: "",
  },
  id: 0,
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    fetchTodo: (state, action) => {
      state.status = "loading";
      state.id = action.payload.id;
    },

    fetchTodoSuccess: (state, action) => {
      state.status = "idle";
      state.todo = action.payload;
    },

    fetchTodoError: (state) => {
      state.status = "failed";
    },
  },
});

export const { fetchTodo, fetchTodoSuccess, fetchTodoError } =
  todoSlice.actions;

export const todo = (state: RootState) => state.todo;

export default todoSlice.reducer;
