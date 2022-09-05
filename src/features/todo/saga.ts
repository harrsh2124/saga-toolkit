import axios from "axios";
import { put } from "redux-saga/effects";
import { fetchTodoError, fetchTodoSuccess } from "./todoSlice";

export interface getTodoItemsAction {
  payload: any;
  type: string;
}

export function* getTodoItems(action: getTodoItemsAction) {
  try {
    // @ts-ignore
    const response = yield axios.get(
      `https://jsonplaceholder.typicode.com/todos/${action.payload}`
    );
    yield put(fetchTodoSuccess(response.data));
  } catch (error: any) {
    console.log(error.message);
    yield put(fetchTodoError());
  }
}
