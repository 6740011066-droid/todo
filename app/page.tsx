"use client";
import { useState } from "react";

const IndexPage = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "Todo1" },
    { id: 2, content: "Todo2" },
    { id: 3, content: "Todo3" }
  ]);
const handleAddTodoFromChanged = (event) => {
  setTodo(event.target.value)
}
const addTodo = () => {
  setTodos([{id: todos.length+1, content: todo}, ...todos])
}
  return (
    <>
      <div>{todo}</div>

      <input className="border h-5" type="text" onChange={handleAddTodoFromChanged} />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map(todo => (<li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
    </>
  );
};

export default IndexPage;