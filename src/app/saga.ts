import { all, takeEvery } from "redux-saga/effects";
import { getTodoItems } from "../features/todo/saga";
import { fetchTodo } from "../features/todo/todoSlice";
import { getUsers } from "../features/user/saga";
import { fetchUser } from "../features/user/userSlice";

function* watchAll() {
  yield all([
    takeEvery(fetchTodo.type, getTodoItems),
    takeEvery(fetchUser.type, getUsers),
  ]);
}

export default watchAll;
