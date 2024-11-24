// src/utils/localStorage.js
export const saveTodoLocally = (todo) => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const clearLocalTodos = () => {
  localStorage.removeItem("todos");
};
