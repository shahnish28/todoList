import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, updateTodo, setTodos } from "./redux/actions";
import socket from "./socket";
import ActivityLog from "./components/ActivityLog"; // Import the Activity Log component
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todos.todos) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("initialTodos", (initialTodos) => {
      dispatch(setTodos(initialTodos));
    });

    socket.on("todoAdded", (newTodo) => {
      dispatch(addTodo(newTodo));
    });

    socket.on("todoRemoved", (id) => {
      dispatch(removeTodo(id));
    });

    socket.on("todoUpdated", (updatedTodo) => {
      dispatch(updateTodo(updatedTodo));
    });

    return () => {
      socket.off("initialTodos");
      socket.off("todoAdded");
      socket.off("todoRemoved");
      socket.off("todoUpdated");
    };
  }, [dispatch]);

  const handleAddTodo = () => {
    if (input.trim()) {
      const newTodo = { id: Date.now(), text: input };
      socket.emit("addTodo", newTodo);
      setInput("");
    }
  };

  const handleRemoveTodo = (id) => {
    socket.emit("removeTodo", id);
  };

  const handleUpdateTodo = (id) => {
    const updatedText = prompt("Edit Todo:");
    if (updatedText && updatedText.trim()) {
      const updatedTodo = { id, text: updatedText };
      socket.emit("updateTodo", updatedTodo);
    }
  };

  return (
    <div>
      <h1>Real-time Collaborative Todo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p className="text">{todo.text}</p>
            <button className="red" onClick={() => handleRemoveTodo(todo.id)}>
              Remove
            </button>
            <button className="blue" onClick={() => handleUpdateTodo(todo.id)}>
              Edit
            </button>
          </li>
        ))}
      </ul>

      {/* Include the Activity Log component */}
      <ActivityLog />
    </div>
  );
};

export default App;
