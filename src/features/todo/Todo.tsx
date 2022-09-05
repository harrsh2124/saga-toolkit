import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchTodo, todo as todoState } from "./todoSlice";

const Todo = () => {
  const { todo, status } = useAppSelector(todoState);
  const dispatch = useAppDispatch();
  const [todoText, setTodoText] = useState<string>("");
  const [currentUser, setCurrentUser] = useState<number>(1);

  useEffect(() => {
    setTodoText(todo.title);
  }, [todo]);

  return (
    <div>
      <div>
        {status === "loading" ? null : (
          <button
            aria-label="Decrement value"
            onClick={() => {
              dispatch(fetchTodo(currentUser));
              setCurrentUser(currentUser + 1);
            }}
          >
            Fetch ToDo
          </button>
        )}

        <div>{todoText}</div>
      </div>
    </div>
  );
};

export default Todo;
