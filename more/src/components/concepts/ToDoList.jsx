import React, { useReducer, useRef } from "react";
import TodoItem from "../ToDoItems";
import "../../App.css"

const todoReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    return [
      ...state,
      {
        data: action.payload,
        isHidden: false,
      },
    ];
  }

  if (action.type === "CHANGE_IS_HIDDEN") {
    return state.map((item, index) => {
      return index === action.payload ? { ...item, isHidden: !item.isHidden } : item;
    });
  }

  console.log(action);
  return state;
};

const initialState = [
  {
    data: "First Item....",
    isHidden: false,
  },
];

const TodoApp = () => {
  const [todoList, dispatch] = useReducer(todoReducer, initialState);
  const inputRef = useRef(null);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "ADD_ITEM", payload: e.target.value });
            e.target.value = "";
          }
        }}
      />

      {todoList.map((todoItem, index) => (
        <TodoItem key={index} item={todoItem} index={index} dispatch={dispatch} />
      ))}

      <button
        onClick={() => {
          inputRef.current.focus();
        }}
        className="Backbutton"
      >
        Back
      </button>
    </div>
  );
};

export default TodoApp;
