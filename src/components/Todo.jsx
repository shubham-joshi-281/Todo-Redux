import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/Todo/todoSlice";
import "./todo.css";
const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const removeTodoHandler = (id) => {
    dispatch(removeTodo(id));
    return alert("Todo Is Removed ");
  };
  return (
    <>
      {!todos?.length <= 0 ? (
        <section className="show-todo">
          {todos?.map((ele, index) => {
            return (
              <div key={index} className="todo">
                <p>{ele.text}</p>
                <button onClick={() => removeTodoHandler(ele.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </section>
      ) : (
        <h1
          style={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "#aaa",
          }}
        >
          No Task To Display
        </h1>
      )}
    </>
  );
};

export default Todo;
