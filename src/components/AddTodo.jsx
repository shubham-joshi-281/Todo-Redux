import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/todoSlice";
import "./todo.css";
const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      return alert("Empty Todo Can Not Be Added ! ");
    }
    dispatch(addTodo(input));
    setInput("");
    return alert("Todo Is Added ! ");
  };
  return (
    <main className="container">
      <h1 className="heading">TODO APP</h1>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="text"
          className="in"
          placeholder="Add Text..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit"> submit</button>
      </form>
    </main>
  );
};

export default AddTodo;
