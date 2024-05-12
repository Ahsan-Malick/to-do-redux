import React, { useEffect, useState } from "react";


import {
  crossTodo,
  removeTodo,
  selectTodoList,
  updateTodo,
} from "../features/todo/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const Todos = () => {
  const [check, setCheck] = useState(false);
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const handleCross = (e, todo) => {
    dispatch(crossTodo(todo));
  };
  const handleRemoveTodo = (e, todo) => {
    dispatch(removeTodo(todo));
  };

  useEffect=(()=>{setCheck(!check)},[dispatch, handleCross])

  return (
    <div>
      <div className="w-[70%] mx-auto">
        <h1 className="text-start text-lg font-semibold">Todo-List</h1>
        <ul role="list" className="divide-y divide-gray-100">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li className="flex justify-between gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                  <input
                    type="checkbox"
                    checked={check}
                    onChange={(e) => handleCross(e, todo)}
                  ></input>
                  <div>
                    <p className="text-xl text-start font-semibold leading-6 underline text-gray-900">
                      {todo.title}
                    </p>
                    <p className="mt-1 text-start truncate text-xs leading-5 text-gray-500">
                      {todo.input}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={(e) => handleRemoveTodo(e, todo)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>Todo-List is empty</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Todos;
