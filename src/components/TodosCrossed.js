import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearHistory, selectCrossedList } from "../features/todo/todoSlice";

const TodosCrossed = () => {
  const crossed = useSelector(selectCrossedList);
  const reversedCrossed = [...crossed].slice().reverse();
  const dispatch = useDispatch();
  const cleanHistory = () => {
    dispatch(clearHistory());
  };
  return (
    <div>
      <div>
        <div className="w-[70%] mx-auto">
          <h1 className="text-start text-lg font-semibold">Crossed-Items</h1>
          <button
            className="flex bg-indigo-500 text-white px-3 rounded-md"
            onClick={cleanHistory}
          >
            Clear history
          </button>
          <ul role="list" className="divide-y divide-gray-100">
            {crossed.length > 0 ? (
              crossed.map((cross) => (
                <li className="flex justify-between gap-x-6 py-5">
                  <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex">
                      <div>
                        <p className="text-sm text-start font-semibold leading-6 text-gray-900 line-through">
                          {cross.title}
                        </p>
                        <p className="mt-1 text-start truncate text-xs leading-5 text-gray-500 line-through">
                          {cross.input}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <p>No items added</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodosCrossed;
